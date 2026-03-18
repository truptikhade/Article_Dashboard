const insightModel = require('../model/insight.model');
exports.getInsight = async (queryParams) => {

    const filters = {};

    for (const key in queryParams) {
        if (queryParams[key]) {
        filters[key] = queryParams[key];
        }
    }

    const data = await insightModel.find(filters).limit(100);

    return data;
};