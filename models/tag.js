'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tag.belongsTo(models.weapon);
      tag.belongsTo(models.element);    
    }
  };
  tag.init({
    weaponId: DataTypes.INTEGER,
    elementId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tag',
  });
  return tag;
};