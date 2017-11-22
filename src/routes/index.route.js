import express from 'express';
import topicRoute from './topic.route'
import busRoute from './bus.route'

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
    res.send('OK')
);

// mount user routes at /users
router.use('/topics', topicRoute);

router.use('/businfo', busRoute);

export default router