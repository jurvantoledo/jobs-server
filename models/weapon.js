'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class weapon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      weapon.belongsTo(models.user);
      weapon.belongsTo(models.element)
    }
  };
  weapon.init({
    name: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    rarity: { 
      type: DataTypes.STRING, 
      defaultValue: "#ffffff",    
      allowNull: false 
    },
  }, {
    sequelize,
    modelName: 'weapon',
  });
  return weapon;
};