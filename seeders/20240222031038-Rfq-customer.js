"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("RFQCustomers", [
      {
        customerID: "M1-ABDI-11",
        orderLinesSKU: "UNP-120",
        orderLinesQuantity: 10,
        orderLinesUnitOfMeasure: "Batang",
      },
      {
        customerID: "M1-ABDI-11",
        orderLinesSKU: "UNP-200",
        orderLinesQuantity: 6,
        orderLinesUnitOfMeasure: "Batang",
      },
      {
        customerID: "M1-STQI-11",
        orderLinesSKU: "PLT-BRDS0230",
        orderLinesQuantity: 100,
        orderLinesUnitOfMeasure: "Lembar",
      },
      {
        customerID: "M1-STQI-11",
        orderLinesSKU: "PLT-SPHC0155",
        orderLinesQuantity: 50,
        orderLinesUnitOfMeasure: "Lembar",
      },
      {
        customerID: "M1-STQI-11",
        orderLinesSKU: "PLT-SPHC0180",
        orderLinesQuantity: 50,
        orderLinesUnitOfMeasure: "Lembar",
      },
      {
        customerID: "M1-SURA-11",
        orderLinesSKU: "PLT-SPHC0120",
        orderLinesQuantity: 170,
        orderLinesUnitOfMeasure: "Lembar",
      },
      {
        customerID: "M1-SURA-11",
        orderLinesSKU: "PLT-SPHC0150",
        orderLinesQuantity: 20,
        orderLinesUnitOfMeasure: "Lembar",
      },
      {
        customerID: "M1-SURA-11",
        orderLinesSKU: "PLT-SPHC0200",
        orderLinesQuantity: 15,
        orderLinesUnitOfMeasure: "Lembar",
      },
      {
        customerID: "M1-PUMS-11",
        orderLinesSKU: "SIK-040040-IBB",
        orderLinesQuantity: 51,
        orderLinesUnitOfMeasure: "Batang",
      },
      {
        customerID: "M1-PUMS-11",
        orderLinesSKU: "SIK-050050-IBB",
        orderLinesQuantity: 72,
        orderLinesUnitOfMeasure: "Batang",
      },
      {
        customerID: "M1-PUMS-11",
        orderLinesSKU: "SIK-060060-IBB",
        orderLinesQuantity: 8,
        orderLinesUnitOfMeasure: "Batang",
      },
      {
        customerID: "M1-PUMS-11",
        orderLinesSKU: "SIK-070070-IBB",
        orderLinesQuantity: 8,
        orderLinesUnitOfMeasure: "Batang",
      },
      {
        customerID: "M1-PUMS-11",
        orderLinesSKU: "SIK-080080-IBB",
        orderLinesQuantity: 10,
        orderLinesUnitOfMeasure: "Batang",
      },
      {
        customerID: "M1-PUMS-11",
        orderLinesSKU: "SIK-120120-IBB",
        orderLinesQuantity: 5,
        orderLinesUnitOfMeasure: "Batang",
      },
      {
        customerID: "M1-PUMS-11",
        orderLinesSKU: "PIP-SCH4080",
        orderLinesQuantity: 2,
        orderLinesUnitOfMeasure: "Batang",
      },
      {
        customerID: "M1-SUGP-11",
        orderLinesSKU: "SIK-100100-IBB",
        orderLinesQuantity: 30,
        orderLinesUnitOfMeasure: "Batang",
      },
      {
        customerID: "M1-SUGP-11",
        orderLinesSKU: "SIK-120120-IBB",
        orderLinesQuantity: 11,
        orderLinesUnitOfMeasure: "Batang",
      },
      {
        customerID: "M1-SUGP-11",
        orderLinesSKU: "SIK-060060-IBB",
        orderLinesQuantity: 50,
        orderLinesUnitOfMeasure: "Batang",
      },
      {
        customerID: "M1-SUGP-11",
        orderLinesSKU: "SIK-070070-IBB",
        orderLinesQuantity: 120,
        orderLinesUnitOfMeasure: "Batang",
      },
      {
        customerID: "M1-SUGP-11",
        orderLinesSKU: "SIK-080080-IBB",
        orderLinesQuantity: 15,
        orderLinesUnitOfMeasure: "Batang",
      },
      {
        customerID: "M1-SUGP-11",
        orderLinesSKU: "WFL-300-GG",
        orderLinesQuantity: 8,
        orderLinesUnitOfMeasure: "Batang",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("RFQCustomers", null, {});
  },
};
