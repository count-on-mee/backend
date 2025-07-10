'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    await queryInterface.bulkInsert(
      'trip_destination',
      [
        {
          name: '서울',
          img_url:
            'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS0mhKBX3GFubbEPU_mIYGk3N5-Q7ytj_U7wA5pRC1dSZAjvxhhcg6FknhKdP8dHjFpE02upDZv0E09b_6q6pxv617GFriBflfHf5Oenw',
          created_at: now,
          updated_at: now,
        },
        {
          name: '부산',
          img_url:
            'https://search.pstatic.net/common/?src=https%3A%2F%2Fwww.visitbusan.net%2FuploadImgs%2Ffiles%2Fcntnts%2F20191229160529389_thumbL&type=f418_336&expire=2&refresh=true',
          created_at: now,
          updated_at: now,
        },
        {
          name: '제주',
          img_url:
            'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTTsC0_IudD79eKX8o3jSRnWW9JLmlxFIa3Ypw-ublXlWzbf5b13ZjHASUX9vw8Slvf4G7XYyT1P6wIlim1KoCqvSMdBxWKZGLLnRtwsQ',
          created_at: now,
          updated_at: now,
        },
        {
          name: '강릉',
          img_url:
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr27jV9vpNhQAHE7AbYrvRGDJ8U5VYbnqDSqsn_2a-HUjh0TofTtwKYdZLjJGp9XaIKGBIfyfNA6ghBl9iQO5VLlzBrQqqEMDcDS2NmCJro_c8mWtxlKiLkHjeZPiYBfPqMQQZW=w540-h312-n-k-no',
          created_at: now,
          updated_at: now,
        },
        {
          name: '경주',
          img_url:
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nolJd_A1HuCzvjJYSJcC7FWZ2drKY0oGF2MjnkUbmjUk5HTFHgY9bjhCVHkhRqCmTM9tew13k2Vh24A0PBwsLCLSXGK4EiHiACJQ8WYQDWQVY4OUakVpYRedpsE6C5tX-5GDokv=w540-h312-n-k-no',
          created_at: now,
          updated_at: now,
        },
        {
          name: '여수',
          img_url:
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqd8RMDz6U18WPDw290WKwWYun7TVbunaqih5J7uKSG_eCG3POBOHw7vVuu6Y5bCy9DxEQD3K8Zzpb0Y5O_uIe5tpC39lUE_SlSrV-3mZ0Nk62t6C5R_vXze5vOHScllKdAyCA4=w540-h312-n-k-no',
          created_at: now,
          updated_at: now,
        },
        {
          name: '전주',
          img_url:
            'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQjLJoxe8dvZRGa1R8slNMm0jc99o9JKY-buBZSswwszLBnrYQgpQGWpwpvkbaaGmPJ-J7Um5uGucdwJsOKfZNXaGcl3y5mmZiekOjdmA',
          created_at: now,
          updated_at: now,
        },
        {
          name: '속초',
          img_url:
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nog3uz-SBJQrE7mzJu74iI49qeabXO-KnX7W_RunXv44UT-SjWX5x0VvTKplaFxyOBbPgpZ6rl2L8JeWexDVVwgNREPfjWj9cQIqMq50oCEx6GuiZsspx6HS_AhU_wkZdjPM7n7=w540-h312-n-k-no',
          created_at: now,
          updated_at: now,
        },
        {
          name: '인천',
          img_url:
            'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRN44zV4szmKLI0H3sWokq_4G4vaO4BQepYWXgkxVtT1G0ecZ59JmpX6aAFxSa0rOdJIdZzEIim7BS1Q3L0FlPu07ajKtBR8cqIz7-hIA',
          created_at: now,
          updated_at: now,
        },
        {
          name: '대구',
          img_url:
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nol-0K_HwT385dq3geSwm-KRYOT2jMZeQycIBBNi-zFyBaUTG2AvRHTJgWYj985NCZ8w9AQ7rVkQYEUYnFkh3a5Tun0DKvViS6ZgniXa0r9X4tlBf2rf-_f2DA4wzTeaQ_gK6Fm=w540-h312-n-k-no',
          created_at: now,
          updated_at: now,
        },
        {
          name: '울산',
          img_url:
            'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSBfFFETrsWoYeDhdkodU9kxX8jqvupT--34j1TPyCsee7w0Xo3WpRi0sjnmd5KJnTC52lgT-lhx7yI3TqriZsrYp0Wcdnr1UxCJzzAKA',
          created_at: now,
          updated_at: now,
        },
        {
          name: '광주',
          img_url:
            'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSYdjr6DdzLy-m2rsjIJrsG1IJrnSx9uIl5QXBxGIvheHlOaYSREKjD0V3uNWH4qyvrohzNgVcklUYaC6gqdUTWFemd0HDGQNx6ge5GRg',
          created_at: now,
          updated_at: now,
        },
        {
          name: '남원',
          img_url:
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrugNDI24SZ2wPPTo7vNolB3-VauDYqs0-DS8Xg29ImN3rsd8_vZwrErNixgw-RUKZwuiEp8dso1RPzmtG10noLQ2WUolJH1B8LYHPPrnQVg8pRfxN66CntaWfYJgKkpueuxU8ApQ=w540-h312-n-k-no',
          created_at: now,
          updated_at: now,
        },
        {
          name: '포항',
          img_url:
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqVcmrAHcUn7EXDZPayADoLnCIheaYRwDEDiDqYTwjGeyD5MCHlx-w3Ag3UhWSMHXc-EGdWH1x2grZivD9lQ7VNLHiXNmQQLB6KSYumzRLYqOnXrD0N93Oc1eABvrASvU2NS0vdng=w540-h312-n-k-no',
          created_at: now,
          updated_at: now,
        },
        {
          name: '대전',
          img_url:
            'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSD6r-Sd2DKkq1quGKyduTIKW2VzHtdXvQqwaMWHs1dbwb1aycAO8r-nqfQQ3vPtw-zRPW8lLyCQNyvK9hmbpBSHZHN49uoKJ6zuou5exw',
          created_at: now,
          updated_at: now,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('trip_destination', null, {});
  },
};
