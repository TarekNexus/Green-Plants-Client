import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import NoData from '../components/NoData';
import Loading from '../components/Loading';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyPlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    document.title = "My Plant | Green Plants";
  }, []);
  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/plants/email/${user.email}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch your plants');
        return res.json();
      })
      .then(data => {
        setPlants(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "⚠️ Warning:This  Plant Collection delete !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/plants/${id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Plant has been deleted.", "success");
              const remainingPlants = plants.filter(plant => plant._id !== id);
              setPlants(remainingPlants);
            }
          })
          .catch(() => {
            Swal.fire("Error", "Something went wrong while deleting.", "error");
          });
      }
    });
  };

  if (loading) return <Loading />;
  if (error) return <div className="text-center text-red-600 py-10">Error: {error}</div>;
  if (plants.length === 0) return <NoData />;

  return (
  <div className='w-full '>
   
      <div className="relative p-6 w-11/12 max-w-6xl mx-auto">
     
      <div className="text-center mb-10">
        <h1 className="text-4xl  text-green-600 font-bold">My Plant Collection</h1>
        <p className=" mt-2 max-w-2xl mx-auto">
          Track and manage your personal plant collection with ease.
        </p>
      </div>

      <div className="overflow-x-auto  border border-emerald-200 rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-emerald-200 text-sm">
          <thead className="bg-emerald-100 text-green-600 font-bold">
            <tr>
              <th className="py-3 px-4 text-center font-medium">NO</th>
              <th className="py-3 px-4 text-center font-medium">Plant Name</th>
              <th className="py-3 px-4 text-center font-medium">Category</th>
              <th className="py-3 px-4 text-center font-medium">Watering</th>
              <th className="py-3 px-4 text-center font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-100">
            {plants.map((plant, index) => (
              <tr key={plant._id} className=" transition-colors">
                <td className="py-3 px-4 text-center">{index + 1}</td>
                <td className="py-3 px-4 text-center">{plant.plantName}</td>
                <td className="py-3 px-4 text-center">{plant.category}</td>
                <td className="py-3 px-4 text-center">{plant.wateringFrequency || 'N/A'}</td>
                <td className="py-3 px-4 text-center space-x-2">
                  
                 <Link to={`/update/${plant._id}`}><button
                   
                    className="px-3 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
                  >
                    Update
                  </button></Link>
                  <button
                    onClick={() => handleDelete(plant._id)}
                    className="px-3 py-1 rounded text-white hover:bg-red-400  bg-red-700  transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default MyPlants;
