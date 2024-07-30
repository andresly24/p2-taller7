'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('usupers', {
      fields: ['id_usuario'],
      name: 'id_usuario_fk',
      type: 'foreign key',
      references: {
        table: 'usuarios',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
    });

    await queryInterface.addConstraint('usupers', {
      fields: ['id_perfil'],
      name: 'id_perfil_fk',
      type: 'foreign key',
      references: {
        table: 'perfils',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('usuper', 'id_usuario_fk')
    await queryInterface.removeConstraint('usuper', 'id_perfil_fk')
  }
};
