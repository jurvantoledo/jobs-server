'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "elements",
      [
        {
          name: "Incendiary",
          weaponId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Corrosive",
          weaponId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shock",
          weaponId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Explosive",
          weaponId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Slag",
          weaponId: 2,
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
