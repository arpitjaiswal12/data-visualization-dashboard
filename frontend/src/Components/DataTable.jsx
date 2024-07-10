import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const DataTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  const totalPages = Math.ceil(data.length / perPage);

  useEffect(() => {
    // Reset to first page whenever data changes
    setCurrentPage(1);
  }, [data]);

  const paginatedData = data.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Given DataSet Table
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b ">S.No</th>
              <th className="py-2 px-4 border-b">Intensity</th>
              <th className="py-2 px-4 border-b">Likelihood</th>
              <th className="py-2 px-4 border-b">Relevance</th>
              <th className="py-2 px-4 border-b">End Year</th>
              <th className="py-2 px-4 border-b">Country</th>
              <th className="py-2 px-4 border-b">Topic</th>
              <th className="py-2 px-4 border-b">Region</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-500">
                <td className="py-2 px-4 border-b text-center">
                  {(currentPage - 1) * perPage + index + 1}
                </td>
                <td className="py-2 px-4 border-b">{item.intensity}</td>
                <td className="py-2 px-4 border-b">{item.likelihood}</td>
                <td className="py-2 px-4 border-b">{item.relevance}</td>
                <td className="py-2 px-4 border-b">{item.end_year}</td>
                <td className="py-2 px-4 border-b">{item.country}</td>
                <td className="py-2 px-4 border-b">{item.topic}</td>
                <td className="py-2 px-4 border-b">{item.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
        >
          Previous
        </button>
        <span className="self-center">
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
    </div>
  );
};

export default DataTable;
