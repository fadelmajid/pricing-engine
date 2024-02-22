'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RFQCustomer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RFQCustomer.init({
    customerID: DataTypes.STRING,
    orderLinesSKU: DataTypes.STRING,
    orderLinesQuantity: DataTypes.INTEGER,
    orderLinesUnitOfMeasure: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RFQCustomer',
  });
  return RFQCustomer;
};