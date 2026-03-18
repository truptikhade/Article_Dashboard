const express = require('express');
const router = express.Router();

const filter= require('../controller/filter.controller');

router.get("/",filter.getFilters);

module.exports=router;