import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { fetchImpactStats } from "../../api/apiClient";

const ImpactChart = ({ filters }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchImpactStats(filters)
      .then(res => setData(res.data));
  }, [filters]);
  const chartData = {
    labels: data.map(d => d._id),
    datasets: [
      {
        label: "Impact Count",
        data: data.map(d => d.count),
        backgroundColor:"#3b82f6",
        borderRadius: 6
      }
    ]
  };
  return <Bar data={chartData} />;
};

export default ImpactChart;