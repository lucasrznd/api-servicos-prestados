'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('deposit', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'profile',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      operation_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deposit_value: {
        type: Sequelize.DOUBLE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('deposit');
  }
};
