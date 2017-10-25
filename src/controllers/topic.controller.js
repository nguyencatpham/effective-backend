var async = require('asyncawait/async');
import topicService from '../services/topic.service'

var controller = {};

controller.getAll = async function(req, res, next) {
    var result = await(topicService.findAll().catch(function(err) {
        return res.status(500).send();
    }));

    res.status(200).send(result);
};

module.exports = controller;