"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Logistics", [
      {
        fleetType: "Fuso",
        capacity: "8 ton",
        from: "Cilincing",
        to: "Jkt Timur",
        cost: 1600000,
      },
      {
        fleetType: "Fuso",
        capacity: "8 ton",
        from: "Cilincing",
        to: "Jkt Barat",
        cost: 1600000,
      },
      {
        fleetType: "Fuso",
        capacity: "8 ton",
        from: "Cilincing",
        to: "Jkt Utara",
        cost: 1600000,
      },
      {
        fleetType: "Fuso",
        capacity: "8 ton",
        from: "Cilincing",
        to: "Jkt Selatan",
        cost: 1600000,
      },
      {
        fleetType: "Fuso",
        capacity: "8 ton",
        from: "Cilincing",
        to: "Bekasi",
        cost: 1800000,
      },
      {
        fleetType: "Fuso",
        capacity: "8 ton",
        from: "Cilincing",
        to: "Depok",
        cost: 1800000,
      },
      {
        fleetType: "Fuso",
        capacity: "8 ton",
        from: "Cilincing",
        to: "Cikarang",
        cost: 1800000,
      },
      {
        fleetType: "Fuso",
        capacity: "8 ton",
        from: "Cilincing",
        to: "Gng Sindur",
        cost: 1900000,
      },
      {
        fleetType: "Fuso",
        capacity: "8 ton",
        from: "Cilincing",
        to: "Tangerang",
        cost: 1800000,
      },
      {
        fleetType: "Tronton",
        capacity: "22 ton",
        from: "Cilincing",
        to: "Jkt Timur",
        cost: 2500000,
      },
      {
        fleetType: "Tronton",
        capacity: "22 ton",
        from: "Cilincing",
        to: "Jkt Barat",
        cost: 2500000,
      },
      {
        fleetType: "Tronton",
        capacity: "22 ton",
        from: "Cilincing",
        to: "Jkt Utara",
        cost: 2500000,
      },
      {
        fleetType: "Tronton",
        capacity: "22 ton",
        from: "Cilincing",
        to: "Jkt Selatan",
        cost: 2500000,
      },
      {
        fleetType: "Tronton",
        capacity: "22 ton",
        from: "Cilincing",
        to: "Bekasi",
        cost: 3450000,
      },
      {
        fleetType: "Tronton",
        capacity: "22 ton",
        from: "Cilincing",
        to: "Depok",
        cost: 3450000,
      },
      {
        fleetType: "Tronton",
        capacity: "22 ton",
        from: "Cilincing",
        to: "Cikarang",
        cost: 3450000,
      },
      {
        fleetType: "Tronton",
        capacity: "22 ton",
        from: "Cilincing",
        to: "Gng Sindur",
        cost: 3600000,
      },
      {
        fleetType: "Tronton",
        capacity: "22 ton",
        from: "Cilincing",
        to: "Tangerang",
        cost: 3450000,
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
    return queryInterface.bulkDelete("Logistics", null, {});
  },
};
