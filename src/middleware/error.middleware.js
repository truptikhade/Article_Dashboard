const logger = require('../config/logger')

const errorhandler = (err, req, res, next) => {
    logger.error(`${req.method} ${req.url} - ${err.message}`);
    res.status(500).json({
        mesaage : err.mesaage
    });
};

module.exports= errorhandler;