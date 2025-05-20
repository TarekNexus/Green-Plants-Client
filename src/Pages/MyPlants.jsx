import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import NoData from '../components/NoData';


const MyPlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return; // Only fetch if user email exists

    fetch(`http://localhost:3000/plants/email/${user.email}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch plants');
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
  }, [user?.email]); // Effect runs when email changes

  if (loading) return <p>Loading plants...</p>;
  if (error) return <p>Error: {error}</p>;
  if (plants.length === 0) return <NoData></NoData>;

  return (
    <div>
      <h2>My Plants ({plants.length})</h2>
      <ul>
        {plants.map(plant => (
          <li key={plant._id}>
            <h3>{plant.plantName}</h3>
            <p>{plant.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPlants;
