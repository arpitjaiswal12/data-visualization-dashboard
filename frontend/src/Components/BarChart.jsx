import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data, filters }) => {
  const [xAxis, setxAxis] = useState("topic");
  const [yAxis, setyAxis] = useState("intensity");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(100); // Number of data points per page

  const filteredData = data.filter((item) => {
    return (
      (filters.end_year ? item.end_year === filters.end_year : true) &&
      (filters.country ? item.country === filters.country : true) &&
      (filters.topic ? item.topic === filters.topic : true) &&
      (filters.region ? item.region === filters.region : true)
    );
  });

  const totalPages = Math.ceil(filteredData.length / perPage);

  useEffect(() => {
    // Reset to first page whenever filters change
    setCurrentPage(1);
  }, [filters]);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  // const chartData = {
  //   labels: paginatedData.map((d) => d[xAxis]),
  //   datasets: [
  //     {
  //       label: yAxis,
  //       data: paginatedData.map((d) => d[yAxis]),
  //       backgroundColor: "rgba(75, 192, 192, 0.6)",
  //       borderColor: "rgba(75, 192, 192, 1)",
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // show multicolor graphs:

  const colors = [
    "rgba(255, 99, 132, 0.6)",
    "rgba(54, 162, 235, 0.6)",
    "rgba(255, 206, 86, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "rgba(255, 159, 64, 0.6)",
  ];

  const chartData = {
    labels: paginatedData.map((d) => d[xAxis]),
    datasets: [
      {
        label: yAxis,
        data: paginatedData.map((d) => d[yAxis]),
        backgroundColor: paginatedData.map(
          (_, index) => colors[index % colors.length]
        ),
        borderColor: paginatedData.map((_, index) =>
          colors[index % colors.length].replace("0.6", "1")
        ),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bar Chart Visualization",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: xAxis,
        },
      },
      y: {
        title: {
          display: true,
          text: yAxis,
        },
      },
    },
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Bar Chart Visualization </h2>
      <div className=" flex gap-5 mb-4">
        <div>
          <label className="mr-2">X-Axis:</label>
          <select
            value={xAxis}
            onChange={(e) => {
              setxAxis(e.target.value);
            }}
            className="p-2 border rounded text-slate-950"
          >
            <option value="topic">Topic</option>
            <option value="intensity">Intensity</option>
            <option value="likelihood">Likelihood</option>
            <option value="relevance">Relevance</option>
            <option value="end_year">End Year</option>
            <option value="country">Country</option>
            <option value="region">Region</option>
          </select>
        </div>
        <div>
          <label className="mr-2">Y-Axis:</label>
          <select
            value={yAxis}
            onChange={(e) => {
              setyAxis(e.target.value);
            }}
            className="p-2 border rounded text-slate-950"
          >
            <option value="intensity">Intensity</option>
            <option value="likelihood">Likelihood</option>
            <option value="relevance">Relevance</option>
            <option value="end_year">End Year</option>
          </select>
        </div>
      </div>
      <Bar data={chartData} options={options} />
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
      <p className="mt-4">
        This bar chart visualizes the {yAxis} of various {xAxis} from the{" "}
        {data.length} dataset. Displaying {perPage} data points per page. The
        chart displays the filtered data based on the selected criteria.
      </p>
    </div>
  );
};

export default BarChart;
