const insightService = require('../service/insight.service');

exports.getInsight = async(req, res, next) => {
    try{
        const data = await insightService.getInsight(req.query);
        res.status(201).json(data);
    }catch(error){
        console.log(await Insight.countDocuments());
        next(error);
    }
};