'use strict';

const {CLIENTES_TABLE, ClientesSchema, Clientes}  = require('../models/clientes.model')

module.exports = {CLIENTES_TABLE, ClientesSchema, Clientes}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
