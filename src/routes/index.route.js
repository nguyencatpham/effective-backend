import express from 'express';
import topicRoute from './topic.route'

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
res.send('OK')
);

// mount user routes at /users
router.use('/topics', topicRoute);

export default router