const express = require('express');
const router = express.Router();
const controller = require('../controller/analytics.controller');

router.get("/region", controller.getRegionStats);
router.get("/topic-intensity", controller.getTopicIntensity);
router.get("/year-trend", controller.getYearTrend);
router.get("/impact", controller.getImpactStats);
router.get("/country-stats", controller.getCountryStats);
router.get("/likelihood-relevance", controller.getLikelihoodRelevance);

module.exports = router;