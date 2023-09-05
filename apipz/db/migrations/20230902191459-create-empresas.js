'use strict';


const {EMPRESAS_TABLE, EmpresasSchema,Empresas} = require('../models/empresas.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(EMPRESAS_TABLE,EmpresasSchema)
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
