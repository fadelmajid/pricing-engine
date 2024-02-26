"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Suppliers",
      [
        {
          supplierID: "S1-KPS-1",
          address: "Kelurahan Klender, Kecamatan Duren Sawit",
          city: "Jakarta Timur",
          state: "DKI Jakarta",
        },
        {
          supplierID: "S1-HSC-1",
          address: "Mangga Dua Sel., Kecamatan Sawah Besar",
          city: "Jakarta Pusat",
          state: "DKI Jakarta",
        },
        {
          supplierID: "S1-PSB-1",
          address: "Tubagus Angke",
          city: "Jakarta",
          state: "DKI Jakarta",
        },
        {
          supplierID: "S1-SUM-1",
          address: "Kedung Waringin, Kec. Tanah Sereal",
          city: "Kota Bogor",
          state: "Jawa Barat",
        },
        {
          supplierID: "S1-ISB-1",
          address: "Penjaringan",
          city: "Jakarta Utara",
          state: "DKI Jakarta",
        },
        {
          supplierID: "S1-FIX-1",
          address: "Godangdia",
          city: "Jakarta Pusat",
          state: "DKI Jakarta",
        },
        {
          supplierID: "S1-SAM-1",
          address: "Bantar Gebang",
          city: "Kota Bekasi",
          state: "Jawa Barat",
        },
        {
          supplierID: "S1-SSC-1",
          address: "Kec. Sawah Besar",
          city: "Jakarta Pusat",
          state: "DKI Jakarta",
        },
        // Add more data as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Suppliers", null, {});
  },
};
