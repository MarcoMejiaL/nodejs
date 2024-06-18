'use strict';

const {DIRECCION_TABLE,  DireccionSchema, Direccion}  = require('../models/direccion.model')

module.exports = {DIRECCION_TABLE,  DireccionSchema, Direccion}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(DIRECCION_TABLE, DireccionSchema)
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
