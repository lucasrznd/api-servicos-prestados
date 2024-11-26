'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('payment', [
      {
        id: 1,
        job_id: 1, // Job 1
        operation_date: new Date('2024-10-18'),
        payment_value: 500
      },
      {
        id: 2,
        job_id: 4, // Job 4
        operation_date: new Date('2024-11-14'),
        payment_value: 1000
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('payment', null, {});
  }
};
