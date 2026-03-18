import { Scatter } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { fetchLikelihoodRelevance } from "../../api/apiClient";

const LikelihoodRelevanceChart = ({ filters }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchLikelihoodRelevance(filters)
      .then(res => setData(res.data));
  }, [filters]);
  const chartData = {
    datasets: [
      {
        label: "Likelihood vs Relevance",
        data: data.map(d => ({
          x: d.likelihood,
          y: d.relevance
        })),
        backgroundColor:[ "#3b82f6"],
        borderRadius: 6
      }
    ]
  };
  return <Scatter data={chartData} />;
};

export default LikelihoodRelevanceChart;