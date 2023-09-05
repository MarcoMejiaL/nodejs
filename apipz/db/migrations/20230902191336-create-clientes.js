'use strict';
const {CLIENTES_TABLE, ClientesSchema, Clientes} = require('../models/clientes.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CLIENTES_TABLE,ClientesSchema)
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
