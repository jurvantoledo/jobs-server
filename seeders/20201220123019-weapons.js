'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "weapons",
      [
        {
          name: "Emerald",
          image: "https://i.redd.it/k84ivjb32vq21.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "World Burn",
          image: "https://static.wikia.nocookie.net/borderlands/images/1/1f/World_burn.jpg/revision/latest?cb=20190612154749",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("weapons", null, {});

  }
};
