import { useState } from "react";

export default function useFilters() {

  const [filters, setFilters] = useState({
    region: [],
    country: [],
    topic: [],
    sector: [],
    source: [],
    pestle: [],
    impact: [],
    likelihood: [],
    intensity: [],
    relevance: [],
    addedDates: [],
    publishedDates: []
  });

  return { filters, setFilters };

};