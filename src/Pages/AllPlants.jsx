import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllPlants = () => {
  const [plantData, setPlantData] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/plants')
      .then(res => res.json())
      .then(data => setPlantData(data));
  }, []);

  const sortPlants = (data) => {
    if (sortBy === 'nextWateringDate') {
      return [...data].sort((a, b) =>
        new Date(a.nextWateringDate || '') - new Date(b.nextWateringDate || '')
      );
    } else if (sortBy === 'careLevel') {
      return [...data].sort((a, b) => a.careLevel.localeCompare(b.careLevel));
    }
    return data;
  };

  const sortedPlants = sortPlants(plantData);

  return (
    <div className="p-6 w-11/12 mx-auto">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Sort Dropdown */}
      <div className="mb-4 text-right">
        <label className="mr-2 font-medium text-green-700">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">Default</option>
          <option value="nextWateringDate">Next Watering Date</option>
          <option value="careLevel">Care Level</option>
        </select>
      </div>

      {/* Title */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-700">All Plants</h1>
        <p className="text-gray-600 mt-2">
          Discover a wide variety of plants, each with unique characteristics and care needs.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-green-300 rounded shadow">
          <thead>
            <tr className="bg-green-100 text-left">
              <th className="py-3 px-4 text-center">NO:</th>
              <th className="py-3 px-4 text-center">Plant Name</th>
              <th className="py-3 px-4 text-center">Category</th>
              <th className="py-3 px-4 text-center">Watering Frequency</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedPlants.map((plant, index) => (
              <tr key={plant._id} className="border-b border-green-400 hover:bg-green-50">
                <td className="py-3 px-4 text-center">{index + 1}</td>
                <td className="py-3 px-4 text-center">{plant.plantName}</td>
                <td className="py-3 px-4 text-center">{plant.category}</td>
                <td className="py-3 px-4 text-center">{plant.wateringFrequency}</td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => navigate(`/plants/${plant._id}`)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPlants;
