import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const AllPlants = () => {
    const plantData = useLoaderData();
    const navigate = useNavigate();
    console.log(plantData);

    return (
        <div className="p-6 w-11/12 mx-auto">
            {/* Title and Description */}
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-green-700">All Plants</h1>
                <p className="text-gray-600 mt-2">
                    Discover a wide variety of plants, each with unique characteristics and care needs. Browse through categories and learn how often each plant requires watering.
                </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded shadow">
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
                        {plantData.map((plant,index) => (
                            <tr key={plant.id} className="border-b border-green-400 hover:bg-green-50">
                                <td className="py-3 px-4 text-center">{index+1}</td>
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
