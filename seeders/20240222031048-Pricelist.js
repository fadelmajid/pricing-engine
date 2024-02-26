"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Pricelists", [
      {
        supplierID: "S1-FIX-1",
        skuID: "PLT-SPHC1000",
        pricePerUnit: 5596216.21621622,
        stockAvailable: 1,
      },
      {
        supplierID: "S1-FIX-1",
        skuID: "PLT-SPHC0400",
        pricePerUnit: 1789729.72972973,
        stockAvailable: 3,
      },
      {
        supplierID: "S1-FIX-1",
        skuID: "PLT-SPHC0500",
        pricePerUnit: 2390540.54054054,
        stockAvailable: 5,
      },
      {
        supplierID: "S1-FIX-1",
        skuID: "PLT-SPHC0600",
        pricePerUnit: 3008783.78378378,
        stockAvailable: 4,
      },
      {
        supplierID: "S1-FIX-1",
        skuID: "PLT-SPHC1200-GG",
        pricePerUnit: 3640765.76576577,
        stockAvailable: 11,
      },
      {
        supplierID: "S1-FIX-1",
        skuID: "SIK-100100-IBB",
        pricePerUnit: 1066572.97297297,
        stockAvailable: 30,
      },
      {
        supplierID: "S1-FIX-1",
        skuID: "SIK-120120-IBB",
        pricePerUnit: 1540090.09009009,
        stockAvailable: 5,
      },
      {
        supplierID: "S1-FIX-1",
        skuID: "SIK-040040-IBB",
        pricePerUnit: 166129.72972973,
        stockAvailable: 51,
      },
      {
        supplierID: "S1-FIX-1",
        skuID: "SIK-050050-IBB",
        pricePerUnit: 259720.720720721,
        stockAvailable: 72,
      },
      {
        supplierID: "S1-FIX-1",
        skuID: "SIK-060060-IBB",
        pricePerUnit: 372075.675675676,
        stockAvailable: 8,
      },
      {
        supplierID: "S1-FIX-1",
        skuID: "SIK-070070-IBB",
        pricePerUnit: 506627.027027027,
        stockAvailable: 8,
      },
      {
        supplierID: "S1-HSC-1",
        skuID: "PIP-SCH404",
        pricePerUnit: 1559459.45945946,
        stockAvailable: 3,
      },
      {
        supplierID: "S1-HSC-1",
        skuID: "PIP-SCH4060",
        pricePerUnit: 2727027.02702703,
        stockAvailable: 3,
      },
      {
        supplierID: "S1-HSC-1",
        skuID: "PIP-SCH4080",
        pricePerUnit: 4163063.06306306,
        stockAvailable: 2,
      },
      {
        supplierID: "S1-HSC-1",
        skuID: "PLT-SPHC1200-GG",
        pricePerUnit: 3544144.14414414,
        stockAvailable: 11,
      },
      {
        supplierID: "S1-HSC-1",
        skuID: "SIK-100100-IBB",
        pricePerUnit: 990990.990990991,
        stockAvailable: 30,
      },
      {
        supplierID: "S1-HSC-1",
        skuID: "SIK-120120-IBB",
        pricePerUnit: 1447747.74774775,
        stockAvailable: 30,
      },
      {
        supplierID: "S1-HSC-1",
        skuID: "SIK-040040-IBB",
        pricePerUnit: 143694,
        stockAvailable: 51,
      },
      {
        supplierID: "S1-HSC-1",
        skuID: "SIK-060060-IBB",
        pricePerUnit: 324775,
        stockAvailable: 112,
      },
      {
        supplierID: "S1-HSC-1",
        skuID: "SIK-070070-IBB",
        pricePerUnit: 443243,
        stockAvailable: 24,
      },
      {
        supplierID: "S1-HSC-1",
        skuID: "SIK-080080-IBB",
        pricePerUnit: 633783.783783784,
        stockAvailable: 24,
      },
      {
        supplierID: "S1-HSC-1",
        skuID: "SIK-090090-KS",
        pricePerUnit: 804504.504504504,
        stockAvailable: 52,
      },
      {
        supplierID: "S1-HSC-1",
        skuID: "UNP-200",
        pricePerUnit: 2266667,
        stockAvailable: 6,
      },
      {
        supplierID: "S1-HSC-1",
        skuID: "PLT-SPHC0155",
        pricePerUnit: 518919,
        stockAvailable: 50,
      },
      {
        supplierID: "S1-HSC-1",
        skuID: "PLT-SPHC0180",
        pricePerUnit: 582702.702702703,
        stockAvailable: 50,
      },
      {
        supplierID: "S1-HSC-1",
        skuID: "UNP-120",
        pricePerUnit: 1968468.46846847,
        stockAvailable: 10,
      },
      {
        supplierID: "S1-ISB-1",
        skuID: "UNP-200",
        pricePerUnit: 4387387.38738739,
        stockAvailable: 6,
      },
      {
        supplierID: "S1-ISB-1",
        skuID: "PLT-BRDS0230",
        pricePerUnit: 828828.828828829,
        stockAvailable: 100,
      },
      {
        supplierID: "S1-ISB-1",
        skuID: "PLT-SPHC0120",
        pricePerUnit: 400900.900900901,
        stockAvailable: 170,
      },
      {
        supplierID: "S1-KPS-1",
        skuID: "PLT-SPHC0150",
        pricePerUnit: 504504.504504504,
        stockAvailable: 20,
      },
      {
        supplierID: "S1-KPS-1",
        skuID: "PLT-SPHC0200",
        pricePerUnit: 627027.027027027,
        stockAvailable: 15,
      },
      {
        supplierID: "S1-PSB-1",
        skuID: "PLT-SPHC0026",
        pricePerUnit: 788288.288288288,
        stockAvailable: 10,
      },
      {
        supplierID: "S1-PSB-1",
        skuID: "PLT-SPHC0280",
        pricePerUnit: 855855.855855856,
        stockAvailable: 20,
      },
      {
        supplierID: "S1-PSB-1",
        skuID: "SIK-100100-IBB",
        pricePerUnit: 1576767.56756757,
        stockAvailable: 30,
      },
      {
        supplierID: "S1-PSB-1",
        skuID: "SIK-120120-IBB",
        pricePerUnit: 2366674.77477477,
        stockAvailable: 12,
      },
      {
        supplierID: "S1-SAM-1",
        skuID: "SIK-040040-IBB",
        pricePerUnit: 151577.477477477,
        stockAvailable: 51,
      },
      {
        supplierID: "S1-SAM-1",
        skuID: "SIK-050050-IBB",
        pricePerUnit: 475662.162162162,
        stockAvailable: 72,
      },
      {
        supplierID: "S1-SSC-1",
        skuID: "SIK-060060-IBB",
        pricePerUnit: 687067.567567568,
        stockAvailable: 112,
      },
      {
        supplierID: "S1-SSC-1",
        skuID: "SIK-070070-IBB",
        pricePerUnit: 468262.162162162,
        stockAvailable: 124,
      },
      {
        supplierID: "S1-SSC-1",
        skuID: "SIK-080080-IBB",
        pricePerUnit: 1233198.1981982,
        stockAvailable: 20,
      },
      {
        supplierID: "S1-SSC-1",
        skuID: "WFL-300-GG",
        pricePerUnit: 7040000,
        stockAvailable: 8,
      },
      {
        supplierID: "S1-SSC-1",
        skuID: "PLT-KPL0100",
        pricePerUnit: 9864865,
        stockAvailable: 2,
      },
      {
        supplierID: "S1-SSC-1",
        skuID: "SIK-050050-IBB",
        pricePerUnit: 189189,
        stockAvailable: 72,
      },
      {
        supplierID: "S1-SSC-1",
        skuID: "SIK-120120-IBB",
        pricePerUnit: 1261261.26126126,
        stockAvailable: 5,
      },
      {
        supplierID: "S1-SSC-1",
        skuID: "SIK-040040-IBB",
        pricePerUnit: 144144.144144144,
        stockAvailable: 51,
      },
      {
        supplierID: "S1-SUM-1",
        skuID: "SIK-050050-IBB",
        pricePerUnit: 189189.189189189,
        stockAvailable: 72,
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Pricelists", null, {});
  },
};
