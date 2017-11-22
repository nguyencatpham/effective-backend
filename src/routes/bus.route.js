import express from 'express'
import busCtrl from '../controllers/bus.controller'

const router = express.Router(); // eslint-disable-line new-cap

router.route('/getallroute')
    /**
     * @swagger
     * /businfo/getallroute:
     *   get:
     *     tags:
     *       - Buses
     *     description: get all bus
     *     produces:
     *       - application/json
     *     parameters:
     *     responses:
     *       200:
     *         description: Successfully'
     */
    .get(busCtrl.getAllRoute)
router.route('/getroutebyid/:routeId')
    /**
     * @swagger
     * /businfo/getroutebyid/{routeId}:
     *   get:
     *     tags:
     *       - Buses
     *     description: get all bus
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: routeId
     *         schema:
     *          type: integer
     *         required: true
     *         description: id of route
     *     responses:
     *       200:
     *         description: Successfully'
     */
    .get(busCtrl.getRouteById)
router.route('/getvarsbyroute/:routeId')
    /**
     * @swagger
     * /businfo/getvarsbyroute/{routeId}:
     *   get:
     *     tags:
     *       - Buses
     *     description: get all bus
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: routeId
     *         schema:
     *          type: integer
     *         required: true
     *         description: id of route
     *     responses:
     *       200:
     *         description: Successfully'
     */
    .get(busCtrl.getVarsByRoute)
router.route('/gettimetablebyroute/:routeId')
    /**
     * @swagger
     * /businfo/gettimetablebyroute/{routeId}:
     *   get:
     *     tags:
     *       - Buses
     *     description: get all bus
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: routeId
     *         schema:
     *          type: integer
     *         required: true
     *         description: id of route
     *     responses:
     *       200:
     *         description: Successfully'
     */
    .get(busCtrl.getTimeTableByRoute)
router.route('/getstopsbyvar/:routeId/:varId')
    /**
     * @swagger
     * /businfo/getstopsbyvar/{routeId}/{varId}:
     *   get:
     *     tags:
     *       - Buses
     *     description: get all bus
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: routeId
     *         schema:
     *          type: integer
     *         required: true
     *         description: id of route
     *       - in: path
     *         name: varId
     *         schema:
     *          type: integer
     *         required: true
     *         description: id of vars
     *     responses:
     *       200:
     *         description: Successfully'
     */
    .get(busCtrl.getStopByVar)
router.route('/getpathsbyvar/:routeId/:varId')
    /**
     * @swagger
     * /businfo/getstopsbyvar/{routeId}/{varId}:
     *   get:
     *     tags:
     *       - Buses
     *     description: get all bus
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: routeId
     *         schema:
     *          type: integer
     *         required: true
     *         description: id of route
     *       - in: path
     *         name: varId
     *         schema:
     *          type: integer
     *         required: true
     *         description: id of vars
     *     responses:
     *       200:
     *         description: Successfully'
     */
    .get(busCtrl.getPathByVar)
router.route('/gettripsbytimetable/:routeId/:timeTableId')
    /**
     * @swagger
     * /businfo/getstopsbyvar/{routeId}/{timeTableId}:
     *   get:
     *     tags:
     *       - Buses
     *     description: get all bus
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: routeId
     *         schema:
     *          type: integer
     *         required: true
     *         description: id of route
     *       - in: path
     *         name: timeTableId
     *         schema:
     *          type: integer
     *         required: true
     *         description: id of vars
     *     responses:
     *       200:
     *         description: Successfully'
     */
    .get(busCtrl.getTripByTimeTable)
export default router