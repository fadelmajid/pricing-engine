'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HistoricalPOData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HistoricalPOData.init({
    customerID: DataTypes.STRING,
    orderDate: DataTypes.DATE,
    skuID: DataTypes.STRING,
    orderQuantity: DataTypes.INTEGER,
    orderUnit: DataTypes.STRING,
    unitSellingPrice: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'HistoricalPOData',
  });
  return HistoricalPOData;
};