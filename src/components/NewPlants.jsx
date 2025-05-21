import React from 'react';
import { Leaf, LeafIcon } from 'lucide-react';
import { useNavigate } from 'react-router';



const NewPlants = ({lastPlantData}) => {
   const navigate = useNavigate();
  return (
    <section className="w-11/12 mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-green-600 font-semibold flex justify-center items-center gap-2 mb-2">
          <LeafIcon className="w-5 h-5" /> New Arrivals
        </p>
        <h2 className="text-4xl font-bold">Discover Our New Plants</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Explore the latest additions to our green collection. Handpicked for ease and beauty.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {lastPlantData.map((plant) => (
          <div
            key={plant.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
              <p className="text-gray-600 mb-4">{plant.description}</p>
             
               <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                    onClick={(e) => {
                      e.stopPropagation(); // prevent row click
                      navigate(`/plants/${plant._id}`);
                    }}
                  >
                    View Details
                  </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewPlants;
