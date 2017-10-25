var express = require('express');
var router = express.Router();
var controller = require('../controllers/topicController');
/**
 * @swagger
 * /topics:
 *   get:
 *     tags:
 *       - Topics
 *     description: get all topics
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: Successfully'
 */
console.log(controller.getAll)
router.get('', controller.getAll);

module.exports = router;