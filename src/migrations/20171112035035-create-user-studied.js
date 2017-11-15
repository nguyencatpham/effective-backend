'use strict';
import _userStudied from '../models/user-studied'
import baseEntity from './base-entity'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user-studied', ...Object.assign(_userStudied, baseEntity));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user-studied');
  }
};