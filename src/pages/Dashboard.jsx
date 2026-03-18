import { useEffect,useState } from "react";
import Sidebar from "../config/Sidebar";
import useFilters from "../hooks/useFilters";
import { fetchFilters } from "../api/apiClient";

import ChartCard from "../components/cards/ChartCard";
import RegionChart from "../components/charts/RegionChart";
import TopicIntensityChart from "../components/charts/TopicIntensityChart";
import CountryChart from "../components/charts/CountryChart";
import YearTrendChart from "../components/charts/YearTrendChart";
import LikelihoodRelevanceChart from "../components/charts/LikelihoodRelevanceChart";
import ImpactChart from "../components/charts/ImpactChart";

import InsightsTable from "../components/table/InsightTable";

import "../style/dashboard.css";

const Dashboard = () => {
  const {filters,setFilters} = useFilters();
  const [options,setOptions] = useState({});
  useEffect(()=>{
    fetchFilters()
    .then(res=>setOptions(res.data))
  },[]);
  return(  
    <div className="layout">
      <Sidebar options={options} filters={filters} setFilters={setFilters}/>
      <div className="dashboard">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Global Insights Dashboard</h1>
        </div>

        <div className="charts">
          <ChartCard title="Region vs Number of Insights">
            <RegionChart filters={filters}/>
          </ChartCard>

          <ChartCard title="Topic vs Intensity">
            <TopicIntensityChart filters={filters}/>
          </ChartCard>

          <ChartCard title="Country Distribution">
            <CountryChart filters={filters}/>
          </ChartCard>

          <ChartCard title="Year Trend">
            <YearTrendChart filters={filters}/>
          </ChartCard>

          <ChartCard title="Likelihood vs Relevance">
            <LikelihoodRelevanceChart filters={filters}/>
          </ChartCard>

          <ChartCard title="Impact Distribution">
            <ImpactChart filters={filters}/>
          </ChartCard>
        </div>
        <InsightsTable filters={filters}/>
      </div>
    </div>
  );
};

export default Dashboard;