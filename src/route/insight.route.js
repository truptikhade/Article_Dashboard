const express = require('express');
const router = express.Router();

const insight= require('../controller/insight.controller');

router.get("/", insight.getInsight);

module.exports= router;