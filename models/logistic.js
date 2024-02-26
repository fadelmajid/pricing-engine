"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Logistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Logistic.init(
    {
      fleetType: DataTypes.STRING,
      capacity: DataTypes.STRING,
      from: DataTypes.STRING,
      to: DataTypes.STRING,
      cost: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Logistic",
    }
  );
  return Logistic;
};
