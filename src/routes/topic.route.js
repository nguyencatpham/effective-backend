import express from 'express'
import topicCtrl from '../controllers/topic.controller'

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
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
    .get(topicCtrl.getAll)
    /**
     * @swagger
     * /topics:
     *   post:
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
    .post(topicCtrl.create)

router.route('/:id')
    /**
     * @swagger
     * /topics/{id}:
     *   get:
     *     tags:
     *       - Topics
     *     description: get a topic
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *          type: integer
     *         required: true
     *         description: id of topic
     *     responses:
     *       200:
     *         description: Successfully'
     */
    .get(topicCtrl.getOne)
    /**
     * @swagger
     * /topics/{id}:
     *   put:
     *     tags:
     *       - Topics
     *     description: update a topic
     *     produces:
     *       - application/json
      *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *          type: integer
     *         required: true
     *         description: id of topic
     *     responses:
     *       200:
     *         description: Successfully'
     */
    .put(topicCtrl.update)
    /**
     * @swagger
     * /topics/{id}:
     *   delete:
     *     tags:
     *       - Topics
     *     description: delete a topic
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *          type: integer
     *         required: true
     *         description: id of topic
     *     responses:
     *       200:
     *         description: Successfully'
     */
    .delete(topicCtrl.delete)


export default router