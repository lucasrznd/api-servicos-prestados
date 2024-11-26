'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('job', [
      {
        id: 1,
        contract_id: 1, // Contrato 1
        description: 'Aula de reforço em modelagem relacional.',
        operation_date: new Date('2024-10-17'),
        payment_date: new Date('2024-10-18'),
        price: 500,
        paid: 1,
      },
      {
        id: 2,
        contract_id: 1, // Contrato 1
        description: 'Aula de reforço em modelagem relacional - Dia 2.',
        operation_date: new Date('2024-10-19'),
        payment_date: null,
        price: 500,
        paid: 0,
      },
      {
        id: 3,
        contract_id: 1, // Contrato 1
        description: 'Aula de reforço em modelagem relacional - Dia 3.',
        operation_date: new Date('2024-10-22'),
        payment_date: null,
        price: 500,
        paid: 0,
      },
      {
        id: 4,
        contract_id: 2, // Contrato 2
        description: 'Palestra sobre técnicas de programação em Javascript.',
        operation_date: new Date('2024-11-12'),
        payment_date: new Date('2024-11-14'),
        price: 1000,
        paid: 1
      },
      {
        id: 5,
        contract_id: 2, // Contrato 2
        description: 'Palestra sobre técnicas de programação em Javascript - Dia 2',
        operation_date: new Date('2024-11-15'),
        payment_date: null,
        price: 1000,
        paid: 0
      },
      {
        id: 6,
        contract_id: 2, // Contrato 2
        description: 'Palestra sobre técnicas de programação em Javascript - Dia 3',
        operation_date: new Date('2024-11-18'),
        payment_date: null,
        price: 1000,
        paid: 0
      },
      {
        id: 7,
        contract_id: 3, // Contrato 3
        description: 'Sessão de monitoria acadêmica.',
        operation_date: new Date('2024-11-07'),
        payment_date: null,
        price: 300,
        paid: 0
      },
      {
        id: 8,
        contract_id: 4, // Contrato 4
        description: 'Entrega de material didático para a disciplina.',
        operation_date: new Date('2024-11-05'),
        payment_date: null, // Ainda não pago
        price: 800,
        paid: 0
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('job', null, {});
  }
};
