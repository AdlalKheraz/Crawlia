const express = require('express');
const router = express.Router();
const { testPerformance } = require('../controllers/performanceController');

router.post('/', testPerformance);

module.exports = router;
