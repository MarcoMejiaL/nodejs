'use strict';

/** @type {import('sequelize-cli').Migration} */
const {Empresas,EmpresasSchema,EMPRESAS_TABLE} = require('../models/empresas.model')
const {ContadoresSchema,CONTADORES_TABLE} =require('../models/contadores.model')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CONTADORES_TABLE,ContadoresSchema)

  },

  async down (queryInterface, Sequelize) {


  }
};
