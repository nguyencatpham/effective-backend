'use strict';
import _socialLogin from '../models/social-login'
import baseEntity from './base-entity'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('social-login', ...Object.assign(_socialLogin, baseEntity));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('social-login');
  }
};