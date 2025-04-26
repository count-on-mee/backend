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
            'https://lh3.googleusercontent.com/gps-cs-s/AB5caB_ZFMlRSvrCkdtYZeNOvXS1ylcHzl9y2y_YsWMNVqP-lzT9bfYB3zh5y8q4_mOuU3WVqm9EN9KJ5a4EnW7H18O9U_GPKfcoNpqy6z8I8pIzFclaV_394OWmZ4Pnnit31TT9L4A8=w540-h312-n-k-no',
          created_at: now,
          updated_at: now,
        },
        {
          name: '부산',
          img_url:
            'https://lh3.googleusercontent.com/gps-cs-s/AB5caB_SFocUvmmPKfp1Rz0GBV69Sb-NOg8TCB0yAGO2wMFiPnchj4XERaThBY7cbZx0GLfLkrBs4vOdiKahBtALVPSJOjD9qs8pzJhl7Kw7W3hbOzFaaeD9tnZxID58YbDIsEP-_iLs=w540-h312-n-k-no',
          created_at: now,
          updated_at: now,
        },
        {
          name: '제주',
          img_url:
            'https://lh3.googleusercontent.com/gps-cs-s/AB5caB_1rW-e52yD5YjrapBnUADi5ar7U3PbtfyU4AeB8txM156xybf9-E9DSkuLS5l8BOHOmpPITmphYlc4sa2ApNnqQf7clAMOverpxlV5518jVuUIZ5D1Bpj4nQBgn5ripQ6RspcN1g=w540-h312-n-k-no',
          created_at: now,
          updated_at: now,
        },
        {
          name: '강릉',
          img_url:
            'https://lh3.googleusercontent.com/gps-cs-s/AB5caB9ZiuXX69U1u9RAqtU7hwDXXKqK0FlBkrg6ZKjW8kVn9vVtfUS48l1hZyIumAj3PUHE-UyrCrMOvOonwKN4kJy5vgTa4CaRZnxFtQhM2Y1RQT4O2S4rVIDuwRdDE2OUS8quxCnDeQ=w540-h312-n-k-no',
          created_at: now,
          updated_at: now,
        },
        {
          name: '경주',
          img_url:
            'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTVfdyDXZ9xEyJ9t5vp1e7a2QH70PtUum7d75JfoVROQK9ik6pZtsbUx0ee1ibOU_C-HIOuDfBwRbirYyzDT8hgnMuQKTGrRJ3_0dZ8y8o',
          created_at: now,
          updated_at: now,
        },
        {
          name: '여수',
          img_url:
            'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTVfdyDXZ9xEyJ9t5vp1e7a2QH70PtUum7d75JfoVROQK9ik6pZtsbUx0ee1ibOU_C-HIOuDfBwRbirYyzDT8hgnMuQKTGrRJ3_0dZ8y8o',
          created_at: now,
          updated_at: now,
        },
        {
          name: '전주',
          img_url:
            'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTVfdyDXZ9xEyJ9t5vp1e7a2QH70PtUum7d75JfoVROQK9ik6pZtsbUx0ee1ibOU_C-HIOuDfBwRbirYyzDT8hgnMuQKTGrRJ3_0dZ8y8o',
          created_at: now,
          updated_at: now,
        },
        {
          name: '속초',
          img_url:
            'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTVfdyDXZ9xEyJ9t5vp1e7a2QH70PtUum7d75JfoVROQK9ik6pZtsbUx0ee1ibOU_C-HIOuDfBwRbirYyzDT8hgnMuQKTGrRJ3_0dZ8y8o',
          created_at: now,
          updated_at: now,
        },
        {
          name: '인천',
          img_url:
            'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTVfdyDXZ9xEyJ9t5vp1e7a2QH70PtUum7d75JfoVROQK9ik6pZtsbUx0ee1ibOU_C-HIOuDfBwRbirYyzDT8hgnMuQKTGrRJ3_0dZ8y8o',
          created_at: now,
          updated_at: now,
        },
        {
          name: '대구',
          img_url:
            'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTVfdyDXZ9xEyJ9t5vp1e7a2QH70PtUum7d75JfoVROQK9ik6pZtsbUx0ee1ibOU_C-HIOuDfBwRbirYyzDT8hgnMuQKTGrRJ3_0dZ8y8o',
          created_at: now,
          updated_at: now,
        },
        {
          name: '울산',
          img_url:
            'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTVfdyDXZ9xEyJ9t5vp1e7a2QH70PtUum7d75JfoVROQK9ik6pZtsbUx0ee1ibOU_C-HIOuDfBwRbirYyzDT8hgnMuQKTGrRJ3_0dZ8y8o',
          created_at: now,
          updated_at: now,
        },
        {
          name: '광주',
          img_url:
            'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTVfdyDXZ9xEyJ9t5vp1e7a2QH70PtUum7d75JfoVROQK9ik6pZtsbUx0ee1ibOU_C-HIOuDfBwRbirYyzDT8hgnMuQKTGrRJ3_0dZ8y8o',
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
