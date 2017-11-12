import express from 'express'
import topicCtrl from '../controllers/topic.controller'

const router = express.Router(); // eslint-disable-line new-cap
/**
 * @swagger
 * definition:
 *   topicRequest:
 *     required:
 *       - name
 *     properties:
 *       name:
 *          type: string
 *       description:
 *          type: string
 *       type:
 *          type: string
 *          enum: [vocabulary,samoleSentence,conversation,discrimination]
 *       version:
 *          type: string
 *          enum: [original,jew,oz]
 */

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
     *     description: post a topic
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: name
     *         description: category properties
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/topicRequest'
     * responses:
     *   '201':
     *     description: Created
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
     *       - name: name
     *         description: category properties
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/topicRequest'
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