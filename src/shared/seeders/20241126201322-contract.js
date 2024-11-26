'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('contract', [
      {
        id: 1,
        terms: 'Contrato para aulas de reforço em Banco de Dados.',
        client_id: 2, // Lucas Rezende
        contractor_id: 1, // Rogério Marinke
        operation_date: new Date('2024-10-15'),
        status: 'ACTIVE'
      },
      {
        id: 2,
        terms: 'Contrato para palestras sobre técnicas de programação.',
        client_id: 4, // Guilherme Orlandini
        contractor_id: 1, // Rogério Marinke
        operation_date: new Date('2024-11-10'),
        status: 'ACTIVE'
      },
      {
        id: 3,
        terms: 'Contrato para monitoria acadêmica semanal.',
        client_id: 2, // Lucas Rezende
        contractor_id: 3, // Rodrigo Ayres
        operation_date: new Date('2024-11-05'),
        status: 'ACTIVE'
      },
      {
        id: 4,
        terms: 'Contrato para elaboração de material didático.',
        client_id: 4, // Guilherme Orlandini
        contractor_id: 3, // Rodrigo Ayres
        operation_date: new Date('2024-11-01'),
        status: 'ACTIVE',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('contract', null, {});
  }
};
