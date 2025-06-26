import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import Loading from "../components/Loading"; // Make sure this exists or remove if not needed

const AddPlant = () => {
   useEffect(() => {
    document.title = "Add Plant| Green Plants";
  }, []);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddPlant = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    const newPlants = {
      ...Object.fromEntries(formData.entries()),
      addedDate: new Date().toISOString().split("T")[0], // Automatically adds today's date
    };

    fetch("https://green-plants-server.vercel.app/plants", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlants),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.insertedId) {
          Swal.fire({
            title: "Plant added successfully",
            icon: "success",
            confirmButtonColor: "#22c55e",
          }).then(() => {
            form.reset();
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error adding plant:", error);
        Swal.fire({
          title: "Error",
          text: "Something went wrong while adding the plant.",
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 pt-16 relative">
    
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-green-600 mb-2">Add New Plant</h2>
        <p className=" text-xl">Fill out the form to add a new plant</p>
      </div>

      <div className="w-full max-w-5xl  shadow-lg rounded-xl p-8 space-y-6">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleAddPlant}>
          <div className="space-y-4">
            <div>
              <label className="block text-green-600 font-medium mb-1">User Name</label>
              <input
                type="text"
                name="userName"
                value={user.displayName}
                readOnly
                className="w-full border border-green-300 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-green-600 font-medium mb-1">User Email</label>
              <input
                type="email"
                name="userEmail"
                value={user.email}
                readOnly
                className="w-full border border-green-300 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-green-600 font-medium mb-1">Plant Name</label>
              <input
                type="text"
                name="plantName"
                placeholder="e.g., Aloe Vera"
                required
                className="w-full border border-green-300 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-green-600 font-medium mb-1">Plant Image URL</label>
              <input
                type="text"
                name="image"
                placeholder="https://example.com/image.jpg"
                required
                className="w-full border border-green-300 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-green-600 font-medium mb-1">Description</label>
              <textarea
                name="description"
                rows="4"
                placeholder="Write a Description here ?"
                className="w-full border border-green-300 rounded px-4 py-2"
              ></textarea>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-green-600 font-medium mb-1">Category</label>
              <select
                name="category"
                required
                className="w-full border border-green-300 rounded px-4 py-2"
              >
                <option className="font-semibold text-green-600" value="">Select category</option>
                <option className="font-semibold text-green-600" value="succulent">Succulent</option>
                <option className="font-semibold text-green-600" value="fern">Fern</option>
                <option className="font-semibold text-green-600" value="flowering">Flowering</option>
                <option className="font-semibold text-green-600" value="herb">Herb</option>
                <option className="font-semibold text-green-600" value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-green-600 font-medium mb-1">Care Level</label>
              <select
                name="careLevel"
                required
                className="w-full border border-green-300 rounded px-4 py-2"
              >
                <option className="font-semibold text-green-600" value="">Select care level</option>
                <option className="font-semibold text-green-600" value="easy">Easy</option>
                <option className="font-semibold text-green-600" value="moderate">Moderate</option>
                <option className="font-semibold text-green-600" value="difficult">Difficult</option>
              </select>
            </div>

            <div>
              <label className="block text-green-600 font-medium mb-1">Health Status</label>
              <select
                name="healthStatus"
                required
                className="w-full border border-green-300 rounded px-4 py-2"
              >
                <option className="font-semibold text-green-600" value="">Select health status</option>
                <option className="font-semibold text-green-600" value="healthy">Healthy</option>
                <option className="font-semibold text-green-600" value="needs_attention">Needs Attention</option>
                <option className="font-semibold text-green-600" value="sick">Sick</option>
              </select>
            </div>

            <div>
              <label className="block text-green-600 font-medium mb-1">Watering Frequency</label>
              <input
                type="text"
                name="wateringFrequency"
                placeholder="e.g., Every 3 days"
                required
                className="w-full border  border-green-300 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-green-600 font-medium mb-1">Last Watered Date</label>
              <input
                type="date"
                name="lastWateredDate"
                className="w-full border border-green-300 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-green-600 font-medium mb-1">Next Watering Date</label>
              <input
                type="date"
                name="nextWateringDate"
                className="w-full border border-green-300 rounded px-4 py-2"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200 disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Plant"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlant;
