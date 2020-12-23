'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "elements",
      [
        {
          name: "Incendiary",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Corrosive",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Explosive",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Slag",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("elements", null, {});

  }
};
