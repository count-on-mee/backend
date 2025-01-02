const { where } = require('sequelize');
const {
  Trip,
  TripItinerary,
  TripUser,
  Spot,
  SpotCategory,
  SpotCategoryRelation,
  SpotBusinessHour,
  SpotBusinessHourInfo,
} = require('../models');
const { getCategories, getBusinessHours } = require('./spotService');
const { differenceInDays } = require('date-fns');

const createTrip = async (userId, tripData) => {
  const { title, destination, startDate, endDate, spotIds } = tripData;

  try {
    const newTrip = await Trip.create({
      title,
      destination,
      startDate,
      endDate,
    });

    const daysBetween =
      differenceInDays(new Date(endDate), new Date(startDate)) + 1;

    // spotIds를 category별로 분류 및 spotId를 기반으로 spot 관련 데이터 추출
    const categorizedSpots = {};

    for (const spotId of spotIds) {
      const spot = await Spot.findOne({
        where: { spotId },
        include: [
          {
            model: SpotCategoryRelation,
            include: [SpotCategory],
          },
          {
            model: SpotBusinessHourInfo,
            as: 'spotBusinessHourInfo',
            include: {
              model: SpotBusinessHour,
              as: 'spotBusinessHour',
            },
          },
        ],
      });

      const category = getCategories(spot);

      if (!categorizedSpots[category]) {
        categorizedSpots[category] = [];
      }
      categorizedSpots[category].push({
        spotId: spot.spotId,
        title: spot.title,
        category: category[0],
        lng: spot.location.coordinates[0],
        lat: spot.location.coordinates[1],
        businessHour: getBusinessHours(spot),
      });
    }
    
    // categorizedSpots 활용한 변수
    // k-means, tsp 적용 위치
    // trip_itinerary 테이블의 데이터 생성
    // day: 여행 날짜(?) ex. 1일차, 2일차
    // order: 하루 일정 내의 스팟 순서

    //1. Spot 분류
    const accommodations = categorizedSpots['숙소'] || []; //숙소 spots
    //const holidaySpots = []; //휴무일이 있는 spots(클러스터 개수보다 spot수가 많아야함..)
    //const remainingSpots = {}; //남은 Spots

    /*
    for (const [category, spots] of Object.entries(categorizedSpots)) {
      if (category === '숙소') continue;
  
      for (const spot of spots) {
        const { businessHour } = spot;
        const isHoliday = businessHour.info.every(day => 
          !day.openTime || day.openTime === '00:00:00'
        );
  
        if (isHoliday) {
          holidaySpots.push(spot);
        } else {
          if (!remainingSpots[category]) remainingSpots[category] = [];
          remainingSpots[category].push(spot);
        }
      }
    }
      */
    const remainingSpots = Object.entries(categorizedSpots)
      .filter(([category]) => category !== '숙소') 
      .reduce((result, [category, spots]) => {
        result[category] = spots;
        return result;
      }, {});

    //2. 클러스터링
    const kmeans = require('node-kmeans');

    //2-1. 클러스터링 생성 함수
    const clusterSpots = (spots, daysBetween) => {
      const vectors = spots.map(spot => [spot.lat, spot.lng]);

      return new Promise((resolve, reject) => {
        kmeans.clusterize(vectors, { k: daysBetween }, (err, res) => {
          if (err) reject(err);

          const clusters = res.map(cluster => ({
            centroid: cluster.centroid, 
            spots: cluster.clusterInd.map(spotIndex => spots[spotIndex])
          }));
          let iterations = 0;
          const maxIterations = 100; // 최대 반복 횟수
          while (!isBalanced(clusters, spots.length, daysBetween)) {
            if (iterations > maxIterations) break; // 루프 강제 종료
            redistributeSpots(clusters, spots.length, daysBetween);
            iterations++;
          }

          resolve(clusters);
        });
      });
    };

    //2-2. 클러스터 균등화 함수(spot data균등하게 만들기)
    const isBalanced = (clusters, totalSpots, daysBetween) => {
      const maxPerCluster = Math.ceil(totalSpots / daysBetween);
      return clusters.every(cluster => cluster.length <= maxPerCluster);
    };

    const redistributeSpots = (clusters, totalSpots, daysBetween) => {
      const maxPerCluster = Math.ceil(totalSpots / daysBetween);
    
      clusters.forEach(cluster => {
        while (cluster.spots.length > maxPerCluster) {
          const underfilledCluster = clusters.find(
            c => c.spots.length < maxPerCluster
          );
    
          if (underfilledCluster) {
            const spotToMove = cluster.spots.pop();
            underfilledCluster.spots.push(spotToMove);
          }
        }
      });
    };

    const spotsArray = Object.values(remainingSpots).flat();
    
    // 3. 숙소와 클러스터 배정
    const haversineDistance = (coord1, coord2) => {
      const toRadians = (deg) => (deg * Math.PI) / 180;
  
      const [lat1, lng1] = coord1;
      const [lat2, lng2] = coord2;
  
      const dLat = toRadians(lat2 - lat1);
      const dLng = toRadians(lng2 - lng1);
  
      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRadians(lat1)) *
          Math.cos(toRadians(lat2)) *
          Math.sin(dLng / 2) ** 2;
  
      return 2 * 6371 * Math.asin(Math.sqrt(a)); 
    };

    const assignAccommodationsToClusters = (clusters, accommodations) => {
      const clusterAssignments = clusters.map((cluster) => ({
        cluster, 
        accommodation: null, 
      }));
    
      // 3-1. 1:1 매칭 - 가장 가까운 숙소 찾기
      const remainingAccommodations = [...accommodations];

      for (const assignment of clusterAssignments) {
        const { cluster } = assignment;
        let closestAccommodation = null;
        let closestDistance = Infinity;

        remainingAccommodations.forEach((accommodation, index) => {
          const distance = haversineDistance(
            cluster.centroid,
            [accommodation.lat, accommodation.lng]
          );
          if (distance < closestDistance) {
            closestDistance = distance;
            closestAccommodation = index;
          }
        });

        if (closestAccommodation !== null) {
          assignment.accommodation = remainingAccommodations.splice(closestAccommodation, 1)[0];
        }
      }

      // 3-2. 남은 클러스터에 대해 중복 허용 매칭& endCluster결정
      let endCluster = null;
      let maxDistance = -Infinity;
      for (const assignment of clusterAssignments) {
        if (!assignment.accommodation) {
          const { cluster } = assignment;
          let closestAccommodation = null;
          let closestDistance = Infinity;

          accommodations.forEach((accommodation) => {
            const distance = haversineDistance(
              cluster.centroid,
              [accommodation.lat, accommodation.lng]
            );
            if (distance < closestDistance) {
              closestDistance = distance;
              closestAccommodation = accommodation;
            }
          });

          if (closestDistance > maxDistance) {
            maxDistance = closestDistance;
            endCluster = cluster; 
          }

          if (closestAccommodation) {
            assignment.accommodation = closestAccommodation;
          }
        }
      }

      if (endCluster) {
        const endClusterIndex = clusterAssignments.findIndex(
          (assignment) => assignment.cluster === endCluster
        );
        if (endClusterIndex !== -1) {
          clusterAssignments.splice(endClusterIndex, 1);
        }
      }

      return { updatedClusters: clusterAssignments, endCluster};
    };

    //TSP
    const solveTSP = (locations) => {
      const n = locations.length;
      const visited = Array(n).fill(false);
      const result = [];
    
      const dfs = (current, path, cost) => {
        if (path.length === n) {
          return { path, cost };
        }
    
        let best = { path: [], cost: Infinity };
        for (let i = 0; i < n; i++) {
          if (!visited[i]) {
            visited[i] = true;
            const nextCost = cost + haversineDistance(locations[current], locations[i]);
            const candidate = dfs(i, [...path, i], nextCost);
            visited[i] = false;
    
            if (candidate.cost < best.cost) {
              best = candidate;
            }
          }
        }
        return best;
      };
    
      visited[0] = true; // 시작점 고정
      return dfs(0, [0], 0);
    };

    const mapClustersToDays = (assignedClusters) => {
      const locations = assignedClusters.map((cluster) => cluster.accommodation);
      const tspResult = solveTSP(locations.map((loc) => [loc.lat, loc.lng]));
    
      return tspResult.path.map((index, day) => ({
        day: day + 1,
        cluster: assignedClusters[index],
      }));
    };

    const planDailyRoutes = (dayClusters) => {
      return dayClusters.map((dayCluster, index) => {
        const spots = dayCluster.cluster.cluster.spots;
        const accommodation = dayCluster.cluster.accommodation;
    
        // 출발지: 전날 숙소 (첫날의 경우는 현재 숙소)
        const start =
          index === 0
            ? accommodation
            : dayClusters[index - 1].cluster.accommodation;
    
        // 도착지: 당일 숙소
        const end = accommodation;
    
        const locations = [start, ...spots];
        const tspRoute = solveTSP(
          locations.map((loc) => [loc.lat, loc.lng])
        );
    
        const route = tspRoute.path.map((i) => locations[i]);
        if(end!= null){
          route.push(end);
        }
        
        return {
          day: dayCluster.day,
          route,
        };
      });
    };

    try {
      //클러스터 생성
      const clusters = await clusterSpots(spotsArray, daysBetween);

      //숙소 클러스터 매핑
      const {updatedClusters:assignedClusters, endCluster} = assignAccommodationsToClusters(clusters, accommodations);
    
      // 숙소 기준 TSP로 날짜별 클러스터 순서 정하기
      const dayClusters = mapClustersToDays(assignedClusters);
    
      dayClusters.push({day:daysBetween, cluster:{cluster:endCluster,accommodation:null}})
      // 각 날의 동선 생성
      const dailyRoutes = planDailyRoutes(dayClusters);
    
      dailyRoutes.forEach((dayRoute, index) => {
      });
    
      // 데이터 저장
      for (let i = 0; i < dailyRoutes.length; i++) {
        const { day, route } = dailyRoutes[i];
    
        for (let order = 0; order < route.length; order++) {
          const spot = route[order];
          await TripItinerary.create({
            tripId: newTrip.tripId,
            spotId: spot.spotId,
            day: day,
            order: order + 1,
          });
        }
      }}
    catch (error) {
      console.error('클러스터링, 데이터 저장:', error);
      throw new Error('클러스터링, 데이터 저장: ' + error.message);
    }      
    
    const { tripId } = newTrip;

    await TripUser.create({
      tripId,
      userId,
    });

    return newTrip;
  } catch (error) {
    console.error('Error creating trip:', error);
    throw new Error('여행 생성 실패: ' + error.message);
  }
};

const getTrips = async (userId) => {
  const findTrips = await Trip.findAll({
    include: {
      model: TripUser,
      as: 'tripUser',
      where: { userId },
    },
  });

  return findTrips;
};

const getTrip = async (userId, tripId) => {
  const trip = await Trip.findOne({
    where: {
      tripId,
    },
    include: [
      {
        model: TripUser,
        as: 'tripUser',
        where: { userId },
      },
      {
        model: TripItinerary,
        as: 'tripItinerary',
        include: {
          model: Spot,
        },
      },
    ],
  });

  return transformTrip(trip);
};

const transformTrip = (trip) => {
  const tripItineraries = trip.tripItinerary.reduce((acc, item) => {
    const dayIndex = acc.findIndex((day) => day.day === item.day);
    const itinerary = {
      tripItineraryId: item.tripItineraryId,
      order: item.order,
      spotId: item.spotId,
      title: item.Spot.title,
      address: item.Spot.address,
      location: item.Spot.location,
    };

    if (dayIndex > -1) {
      acc[dayIndex].itineraries.push(itinerary);
    } else {
      acc.push({
        day: item.day,
        itineraries: [itinerary],
      });
    }

    return acc;
  }, []);

  return {
    tripId: trip.tripId,
    title: trip.title,
    destination: trip.destination,
    startDate: trip.startDate,
    endDate: trip.endDate,
    tripItineraries,
  };
};

module.exports = { createTrip, getTrips, getTrip };
