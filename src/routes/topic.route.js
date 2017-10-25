import express from 'express';
import topicCtrl from '../controllers/topic.controller'

const router = express.Router(); // eslint-disable-line new-cap
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
console.log(topicCtrl.getAll)
router.route('/')
/** GET /api/users - Get list of users */
.get(topicCtrl.getAll)

export default router;