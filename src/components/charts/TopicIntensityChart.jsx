import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { fetchTopicIntensity } from "../../api/apiClient";

const TopicIntensityChart = ({ filters }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchTopicIntensity(filters)
      .then(res => setData(res.data));
  }, [filters]);
  const chartData = {
    labels: data.map(d => d._id),
    datasets: [
      {
        label: "Avg Intensity",
        data: data.map(d => d.avgIntensity),
        backgroundColor:[ "#3b82f6"],
        borderRadius: 6
      }
    ]
  };
  return <Bar data={chartData} />;
};

export default TopicIntensityChart;