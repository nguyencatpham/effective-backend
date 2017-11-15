'use strict';
import _role from '../models/role'
import baseEntity from './base-entity'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('role', ...Object.assign(_role, baseEntity));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('role');
  }
};