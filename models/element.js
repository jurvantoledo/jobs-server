'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class element extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      element.belongsToMany(models.weapon, {
        through: "tag",
        foreignKey: "elementId",
      });
    }
  };
  element.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'element',
  });
  return element;
};