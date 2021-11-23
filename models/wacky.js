'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wacky extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  wacky.init({
    description: DataTypes.TEXT,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'wacky',
  });
  return wacky;
};