'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('job', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      contract_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'contract',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      operation_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      payment_date: {
        type: Sequelize.DATE,
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      paid: {
        type: Sequelize.SMALLINT
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('job');
  }
};
