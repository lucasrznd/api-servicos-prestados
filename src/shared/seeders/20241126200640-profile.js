'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('profile', [
      {
        first_name: 'Rogério',
        last_name: 'Marinke',
        profession: 'Teacher',
        balance: 5000,
        type: 'CONTRACTOR'
      },
      {
        first_name: 'Lucas',
        last_name: 'Rezende',
        profession: 'Student',
        balance: 1000,
        type: 'CLIENT',
      },
      {
        first_name: 'Rodrigo',
        last_name: 'Ayres',
        profession: 'Teacher',
        balance: 4800,
        type: 'CONTRACTOR',
      },
      {
        first_name: 'Guilherme',
        last_name: 'Orlandini',
        profession: 'Teacher',
        balance: 4650,
        type: 'CLIENT',
      },
      {
        first_name: 'John',
        last_name: 'Doe',
        profession: 'Engineer',
        balance: 1000,
        type: 'CLIENT',
    },
    {
        first_name: 'Jane',
        last_name: 'Smith',
        profession: 'Designer',
        balance: 2000,
        type: 'CONTRACTOR',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('profile', null, {});
  }
};
