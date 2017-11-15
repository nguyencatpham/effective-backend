'use strict';
import _user from '../models/user'
import baseEntity from './base-entity'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', ...Object.assign(_user, baseEntity));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};