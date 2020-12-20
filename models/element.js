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
      // define association here
    }
  };
  element.init({
    name: { type: DataTypes.STRING, allowNull: false },
    elemImg: { type: DataTypes.STRING, allowNull: false },
    hasElement: { type: DataTypes.BOOLEAN, defaultValue:false },
  }, {
    sequelize,
    modelName: 'element',
  });
  return element;
};