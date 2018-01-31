var express = require('express');
//Add each route definition here
const testRoutes = require('./test.route');

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount test routes at /test 
router.use('/test', testRoutes);

module.exports = router;
