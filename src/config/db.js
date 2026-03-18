const mongose = require('mongoose');
const logger = require('../config/logger');

const connectDB = async()=>{
    try{
        await mongose.connect("mongodb://127.0.0.1:27017/dashboardDB");
        logger.info("MongoDB connected");
    }catch(err){
        logger.error("MongoDB connection failed");
        process.exit(1);
    }
};

module.exports=connectDB;