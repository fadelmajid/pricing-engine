"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("HistoricalPOData", {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      customerID: {
        type: Sequelize.STRING,
      },
      orderDate: {
        type: Sequelize.DATEONLY,
      },
      skuID: {
        type: Sequelize.STRING,
      },
      orderQuantity: {
        type: Sequelize.INTEGER,
      },
      orderUnit: {
        type: Sequelize.STRING,
      },
      unitSellingPrice: {
        type: Sequelize.DECIMAL,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("HistoricalPOData");
  },
};
