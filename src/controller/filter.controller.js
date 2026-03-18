const Insight = require("../model/insight.model");

exports.getFilters = async (req, res, next) => {
  try {

    const [
      topics,
      sectors,
      regions,
      countries,
      sources,
      pestles,
      impacts,
      likelihoods,
      intensities,
      relevances,
      addedDates,
      publishedDates
    ] = await Promise.all([
      Insight.distinct("topic"),
      Insight.distinct("sector"),
      Insight.distinct("region"),
      Insight.distinct("country"),
      Insight.distinct("source"),
      Insight.distinct("pestle"),
      Insight.distinct("impact"),
      Insight.distinct("likelihood"),
      Insight.distinct("intensity"),
      Insight.distinct("relevance"),
      Insight.distinct("added"),
      Insight.distinct("published")
    ]);

    res.status(200).json({
      topics,
      sectors,
      regions,
      countries,
      sources,
      pestles,
      impacts,
      likelihoods,
      intensities,
      relevances,
      addedDates,
      publishedDates
    });

  } catch (error) {
    next(error);
  }
};