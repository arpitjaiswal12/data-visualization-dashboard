import { useEffect, useState } from "react";
import axios from "axios";
import BarChart from "./BarChart";
import Filters from "./Filters";
import LineGraph from "./LineChart";
import PieChart from "./PieChart";
import DataTable from "./DataTable";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    intensity: "",
    likelihood: "",
    relevance: "",
    end_year: "",
    country: "",
    topic: "",
    region: "",
    // Add other filters as needed
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/get/insights")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://data-visualization-dashboardbackend-gzlx56w91.vercel.app/api/get/insights")
      .then((response) => {
        // setData(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Data Visualization Dashboard
      </h1>
      <Filters filters={filters} setFilters={setFilters} />
      <div className="mt-6">
        <BarChart data={data} filters={filters} />
      </div>
      <div className="mt-6">
        <LineGraph data={data} filters={filters} />
      </div>
      <div className="mt-6">
        <PieChart data={data} filters={filters} />
      </div>
      <div className="mt-6">
        <DataTable data={data} filters={filters} />
      </div>
    </div>
  );
};

export default Dashboard;
