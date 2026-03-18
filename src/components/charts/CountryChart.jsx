import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { fetchCountryStats } from "../../api/apiClient";

const CountryChart = ({ filters }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchCountryStats(filters)
      .then(res => setData(res.data));
  }, [filters]);
  const chartData = {
    labels: data.map(d => d._id),
    datasets: [
      {
        label: "Insights Count",
        data: data.map(d => d.count),
        backgroundColor:"#3b82f6",
        borderRadius: 6
      }
    ]
  };
  return <Bar data={chartData} />;
};

export default CountryChart;