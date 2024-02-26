'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customers', [
      { customerID: 'M1-ABDI-11', address: 'Taman Sari, Kec. Setu', city: 'Bekasi', state: 'Jawa Barat' },
      { customerID: 'M1-PUMS-11', address: 'Gunung Sindur', city: 'Bogor', state: 'Jawa Barat' },
      { customerID: 'M1-STQI-11', address: 'Kel. Rorotan- Cilincing', city: 'Jakarta Utara', state: 'DKI Jakarta' },
      { customerID: 'M1-SUGP-11', address: 'Gn. Putri Kec. Gn. Putri', city: 'Bekasi', state: 'Jawa Barat' },
      { customerID: 'M1-SURA-11', address: 'Padurenan, Mustika Jaya', city: 'Bekasi', state: 'Jawa Barat' },
      // Add more data as needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {});
  }
};
