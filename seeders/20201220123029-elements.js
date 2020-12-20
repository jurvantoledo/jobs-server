'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "elements",
      [
        {
          name: "Incendiary",
          elemImg: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/borderlands-2/9/95/Fire.jpg?width=325",
          hasElement: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Corrosive",
          elemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6KjrpM7zjbweLexR5uwTd78dr6C4-orOyOw&usqp=CAU",
          hasElement: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shock",
          elemImg: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/borderlands-2/d/db/Shock21.jpg?width=325",
          hasElement: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Explosive",
          elemImg: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/borderlands-2/4/43/Weaponss.png?width=325",
          hasElement: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Slag",
          elemImg: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/borderlands-2/8/8d/Slag_Symbol.jpg?width=325",
          hasElement: false,
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
