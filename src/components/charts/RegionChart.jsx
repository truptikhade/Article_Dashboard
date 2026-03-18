import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { fetchRegionStats } from "../../api/apiClient";

const RegionChart = ({ filters }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchRegionStats(filters)
      .then(res => setData(res.data));
  }, [filters]);
  const chartData = {
    labels: data.map(d => d._id),
    datasets: [
      {
        label: "Regions",
        data: data.map(d => d.count),
        backgroundColor: [
        "#3B82F6",
        "#498af4",
        "#5a96f8",
        "#74a5f6",
        "#95baf4",
        "#aec9f3",
        "#c1d4f4",
        "#9aadca"
        ],
        borderWidth:1
      }
    ]
  };
  return <Pie data={chartData} />;
};

export default RegionChart;