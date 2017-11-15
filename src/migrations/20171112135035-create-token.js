'use strict';
import _token from '../models/token'
import baseEntity from './base-entity'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('token', ...Object.assign(_token, baseEntity));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('token');
  }
};