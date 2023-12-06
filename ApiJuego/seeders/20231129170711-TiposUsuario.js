'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('typeusers', [
      {
        type: 'Administrador'
      },
      {
        type: 'Usuario'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('typeusers', null, {});
  }
};
