import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 10000
});

export default api;

export const fetchFilters = () => api.get("/filter");

export const fetchInsights = (params) =>
  api.get("/insight", { params });

export const fetchRegionStats = (filters) =>
  api.get("/analytic/region", {params: filters});

export const fetchTopicIntensity = (params) =>
  api.get("/analytic/topic-intensity", { params });

export const fetchCountryStats = (params) =>
  api.get("/analytic/country-stats", { params });

export const fetchYearTrend = (params) =>
  api.get("/analytic/year-trend", { params });

export const fetchLikelihoodRelevance = (params) =>
  api.get("/analytic/likelihood-relevance", { params });

export const fetchImpactStats = (params) =>
  api.get("/analytic/impact", { params });