'use strict';
import _userRole from '../models/user-role'
import baseEntity from './base-entity'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user-role', ...Object.assign(_userRole, baseEntity));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user-role');
  }
};