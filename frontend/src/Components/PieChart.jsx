import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "tailwindcss/tailwind.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 10;

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, data.length - itemsPerPage)
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const filteredData = data.slice(startIndex, startIndex + itemsPerPage);

  const chartData = {
    labels: filteredData.map((d) => d.topic),
    datasets: [
      {
        label: "Topics Distribution",
        data: filteredData.map((d) => d.intensity),
        backgroundColor: filteredData.map(
          (_, idx) => `hsl(${(idx * 360) / itemsPerPage}, 70%, 50%)`
        ),
        hoverBackgroundColor: filteredData.map(
          (_, idx) => `hsl(${(idx * 360) / itemsPerPage}, 70%, 70%)`
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Pie Chart Visualization</h2>
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
        <Pie data={chartData} options={options} />
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + itemsPerPage >= data.length}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
      <p className="mt-4">
        Showing items {startIndex + 1} to{" "}
        {Math.min(startIndex + itemsPerPage, data.length)} of {data.length}.
      </p>
    </div>
  );
};

export default PieChart;
