'use strict';
var _topic = require('../models/topic')
var baseEntity = require('../models/base-entity')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('topic', ...Object.assign(_topic, baseEntity));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('topic');
  }
};