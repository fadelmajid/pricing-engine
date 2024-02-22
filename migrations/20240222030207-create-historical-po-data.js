'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HistoricalPOData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerID: {
        type: Sequelize.STRING
      },
      orderDate: {
        type: Sequelize.DATE
      },
      skuID: {
        type: Sequelize.STRING
      },
      orderQuantity: {
        type: Sequelize.INTEGER
      },
      orderUnit: {
        type: Sequelize.STRING
      },
      unitSellingPrice: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HistoricalPOData');
  }
};