'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Perfils', [{
      descripcion: 'Admin',
      estado: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      descripcion: 'Supervisor',
      estado: 'Supervisor',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      descripcion: 'Operador',
      estado: 'Operador',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      descripcion: 'Cliente',
      estado: 'Cliente',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Perfils', null, {});
  }
};
