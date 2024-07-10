const Filters = ({ filters, setFilters }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {/* <div>
        <label className="block mb-2 text-sm font-medium">
          Intensity:
        </label>
        <input
          type="number"
          name="intensity"
          value={filters.intensity}
          onChange={handleFilterChange}
          className="px-4 py-2 border rounded-md text-slate-950"
        />
      </div> */}
      {/* <div>
        <label className="block mb-2 text-sm font-medium">
          Likelihood:
        </label>
        <input
          type="number"
          name="likelihood"
          value={filters.likelihood}
          onChange={handleFilterChange}
          className="px-4 py-2 border rounded-md text-slate-950"
        />
      </div> */}
      {/* <div>
        <label className="block mb-2 text-sm font-medium">
          Relevance:
        </label>
        <input
          type="number"
          name="relevance"
          value={filters.relevance}
          onChange={handleFilterChange}
          className="px-4 py-2 border rounded-md text-slate-950"
        />
      </div> */}
      <div>
        <label className="block mb-2 text-sm font-medium">End Year:</label>
        <input
          type="text"
          name="end_year"
          value={filters.end_year}
          onChange={handleFilterChange}
          className="px-4 py-2 border rounded-md text-slate-950"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">Country:</label>
        <input
          type="text"
          name="country"
          value={filters.country}
          onChange={handleFilterChange}
          className="px-4 py-2 border rounded-md text-slate-950"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">Topic:</label>
        <input
          type="text"
          name="topic"
          value={filters.topic}
          onChange={handleFilterChange}
          className="px-4 py-2 border rounded-md text-slate-950"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">Region:</label>
        <input
          type="text"
          name="region"
          value={filters.region}
          onChange={handleFilterChange}
          className="px-4 py-2 border rounded-md text-slate-950"
        />
      </div>

      {/* Add more filters as needed */}
    </div>
  );
};

export default Filters;
