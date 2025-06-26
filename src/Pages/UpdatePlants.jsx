import React, {  useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const UpdatePlants = () => {
 
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
 useEffect(() => {
    document.title = "Update Plant | Green Plants";
  }, []);
  useEffect(() => {
    fetch(`http://localhost:3000/plants/${id}`)
      .then(res => res.json())
      .then(data => {
        setPlant(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleUpdatePlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedPlant = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/plants/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPlant)
    })
      .then(res => res.json())
      .then(() => {
        Swal.fire({
          title: 'Plant updated successfully',
          icon: 'success'
        }).then((data) => {
            setPlant(data)
          })
      });
  };

  if (loading) {
    return <Loading></Loading>
  }

  if (!plant) {
    return <div className="text-center py-20 text-red-600">Plant not found.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 pt-16">
        
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-green-600 mb-2">Update Plant</h2>
        <p className="text-xl">Edit the details of your plant</p>
      </div>

      <form
        onSubmit={handleUpdatePlant}
        className="w-full max-w-5xl  shadow-lg rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label htmlFor="plantName" className="block mb-1 font-bold text-green-600">Plant Name</label>
          <input
            id="plantName"
            type="text"
            name="plantName"
            defaultValue={plant.plantName}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block mb-1 font-bold text-green-600">Plant Image URL</label>
          <input
            id="image"
            type="text"
            name="image"
            defaultValue={plant.image}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="description" className="block mb-1 font-bold text-green-600">Description</label>
          <textarea
            id="description"
            name="description"
            defaultValue={plant.description}
            className="w-full border px-4 py-2 rounded"
            rows={4}
          />
        </div>

        <div>
          <label htmlFor="category" className="block mb-1 font-bold text-green-600">Category</label>
          <select
            id="category"
            name="category"
            defaultValue={plant.category}
            className="w-full border px-4 py-2 rounded"
            required
          >
            <option className='text-green-600 font-bold' value="">Select category</option>
            <option className='text-green-600 font-bold' value="succulent">Succulent</option>
            <option className='text-green-600 font-bold' value="fern">Fern</option>
            <option className='text-green-600 font-bold' value="flowering">Flowering</option>
            <option className='text-green-600 font-bold' value="herb">Herb</option>
            <option className='text-green-600 font-bold' value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="careLevel" className="block mb-1 font-bold text-green-600">Care Level</label>
          <select
            id="careLevel"
            name="careLevel"
            defaultValue={plant.careLevel}
            className="w-full border px-4 py-2 rounded"
            required
          >
            <option className='text-green-600 font-bold' value="">Select care level</option>
            <option className='text-green-600 font-bold' value="easy">Easy</option>
            <option className='text-green-600 font-bold' value="moderate">Moderate</option>
            <option className='text-green-600 font-bold' value="difficult">Difficult</option>
          </select>
        </div>

        <div>
          <label htmlFor="healthStatus" className="block mb-1 font-bold text-green-600">Health Status</label>
          <select
            id="healthStatus"
            name="healthStatus"
            defaultValue={plant.healthStatus}
            className="w-full border px-4 py-2 rounded"
            required
          >
            <option className='text-green-600 font-bold' value="">Select health status</option>
            <option className='text-green-600 font-bold' value="healthy">Healthy</option>
            <option className='text-green-600 font-bold' value="needs_attention">Needs Attention</option>
            <option className='text-green-600 font-bold' value="sick">Sick</option>
          </select>
        </div>

        <div>
          <label htmlFor="wateringFrequency" className="block mb-1 font-bold text-green-600">Watering Frequency</label>
          <input
            id="wateringFrequency"
            type="text"
            name="wateringFrequency"
            defaultValue={plant.wateringFrequency}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="lastWateredDate" className="block mb-1 font-bold text-green-600">Last Watered Date</label>
          <input
            id="lastWateredDate"
            type="date"
            name="lastWateredDate"
            defaultValue={plant.lastWateredDate ? plant.lastWateredDate.split('T')[0] : ''}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="nextWateringDate" className="block mb-1 font-bold text-green-600">Next Watering Date</label>
          <input
            id="nextWateringDate"
            type="date"
            name="nextWateringDate"
            defaultValue={plant.nextWateringDate ? plant.nextWateringDate.split('T')[0] : ''}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
        >
          Update Plant
        </button>
      </form>
    </div>
  );
};

export default UpdatePlants;
