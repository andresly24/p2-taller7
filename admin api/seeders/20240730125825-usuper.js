'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let [usuarios, usuarios_metadata] = await queryInterface.sequelize.query('SELECT id FROM usuarios')
    let [perfils, perfils_metadata] = await queryInterface.sequelize.query('SELECT id FROM perfils')
    await queryInterface.bulkInsert('usupers', [
      {
        id_usuario: usuarios[0].id, id_perfil: perfils[3].id, createdAt: new Date(), updatedAt: new
          Date()
      },
      {
        id_usuario: usuarios[1].id, id_perfil: perfils[3].id, createdAt: new Date(), updatedAt: new
          Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usupers', null, {});
  }
};
