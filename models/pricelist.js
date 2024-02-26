"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pricelist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pricelist.init(
    {
      supplierID: DataTypes.STRING,
      skuID: DataTypes.STRING,
      pricePerUnit: DataTypes.DECIMAL,
      stockAvailable: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Pricelist",
    }
  );
  return Pricelist;
};
