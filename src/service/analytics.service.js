const insightModel = require('../model/insight.model');

exports.regionDistribution = async () => {
  return await insightModel.aggregate([
    { $match: { region: { $ne: "" } } },
    { $group: { _id: "$region", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
  ]);
};

exports.topicIntensity = async () => {
  return await insightModel.aggregate([
    { $match: { topic: { $ne: "" } } },
    {
      $group: {
        _id: "$topic",
        avgIntensity: { $avg: "$intensity" },
      },
    },
    { $sort: { avgIntensity: -1 } },
  ]);
};

exports.yearTrend = async () => {
  return await insightModel.aggregate([
    { $match: { start_year: { $ne: null } } },
    { $group: { _id: "$start_year", count: { $sum: 1 } } },
    { $sort: { _id: 1 } },
  ]);
};

exports.impactDistribution = async () => {
  return await insightModel.aggregate([
    { $match: { impact: { $ne: null } } },
    { $group: { _id: "$impact", count: { $sum: 1 } } },
    { $sort: { _id: 1 } },
  ]);
};

exports.getCountryStats = async () => {
  return await insightModel.aggregate([
    { $match: { country: { $ne: "" } } },
    {
      $group: {
        _id: "$country",
        count: { $sum: 1 }
      }
    },
    { $sort: { count: -1 } }
  ]);
};

exports.getLikelihoodRelevance = async () => {
  return await insightModel.aggregate([
    {
      $project: {
        likelihood: 1,
        relevance: 1
      }
    }
  ]);
};