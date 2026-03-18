import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { fetchYearTrend } from "../../api/apiClient";

const YearTrendChart = ({ filters }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchYearTrend(filters)
      .then(res => setData(res.data));
  }, [filters]);
  const chartData = {
    labels: data.map(d => d._id),
    datasets: [
      {
        label: "Insights",
        data: data.map(d => d.count),
        backgroundColor:[ "#3b82f6"],
        borderRadius: 6
        
      }
    ]
  };
  return <Line data={chartData} />;
};

export default YearTrendChart;