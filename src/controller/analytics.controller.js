const analyticsService = require('../service/analytics.service');

exports.getRegionStats = async (req, res, next) => {
  try {
    const data = await analyticsService.regionDistribution();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

exports.getTopicIntensity = async (req, res, next) => {
  try {
    const data = await analyticsService.topicIntensity();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

exports.getYearTrend = async (req, res, next) => {
  try {
    const data = await analyticsService.yearTrend();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

exports.getImpactStats = async (req, res, next) => {
  try {
    const data = await analyticsService.impactDistribution();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

exports.getCountryStats = async (req, res, next) => {
    try {
        const data = await analyticsService.getCountryStats();
        res.status(200).json(data);
    }catch(error){
        next(error);
    }
};

exports.getLikelihoodRelevance = async (req, res, next) => {
    try {
        const data = await analyticsService.getLikelihoodRelevance();
        res.status(200).json(data);
    }catch(error){
        next(error);
    }
};