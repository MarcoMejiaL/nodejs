'use strict';

const {FIELES_TABLE, FielesSchema,Fieles} = require('../models/fiel.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {FIELES_TABLE, FielesSchema,Fieles}
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(FIELES_TABLE, FielesSchema)
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
