'use strict';
import _tokenDetail from '../models/token-detail'
import baseEntity from './base-entity'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('token-detail', ...Object.assign(_tokenDetail, baseEntity));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('token-detail');
  }
};