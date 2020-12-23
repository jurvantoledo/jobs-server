'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          weaponId: 1,
          elementId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          weaponId: 1,
          elementId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          weaponId: 1,
          elementId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          weaponId: 1,
          elementId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          weaponId: 1,
          elementId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {});

  }
};
