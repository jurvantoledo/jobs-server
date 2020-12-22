'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "weapons",
      [
        {
          name: "Emerald",
          type: "Sniper Rifle",
          rarity: "purple",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "World Burn",
          type: "Bazooka",
          rarity: "green",
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
