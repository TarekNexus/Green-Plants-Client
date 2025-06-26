import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Overview = () => {
  const { user } = useContext(AuthContext);
  const [totalPlants, setTotalPlants] = useState(0);
  const [myPlant, setMyPlants] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/count")
      .then((res) => setTotalPlants(res.data.count))
      .catch((err) => console.error(err));

    if (user?.email) {
      axios
        .get(`http://localhost:3000/my-items/count?email=${user.email}`)
        .then((res) => setMyPlants(res.data.count))
        .catch((err) => console.error(err));
    }
  }, [user]);




 useEffect(() => {
    document.title = "Overview | Green Plants";
  }, []);



  return (
    <div className="mt-10 w-11/12 mx-auto">
      <h1 className="text-3xl text-center font-bold mb-10">
        📊 Dashboard Overview
      </h1>
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {/* Total Plants */}
        <div className="bg-gradient-to-r from-green-200 to-green-100 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            🌱 Total Plants
          </h2>
          <p className="text-5xl font-extrabold text-green-700 ">
            {totalPlants}
          </p>
        </div>

        {/* My Plants */}
        <div className="bg-gradient-to-r from-blue-200 to-blue-100 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            🌿 My Plants
          </h2>
          <p className="text-5xl font-extrabold text-blue-700 ">
            {myPlant}
          </p>
        </div>

        {/* Extra Card for balance */}
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-100 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            ☀️ Stay Green!
          </h2>
          <p className="text-md text-gray-600">Keep nurturing your plants.</p>
        </div>
      </div>

      {/* User Profile Card */}
      <div className="bg-base-200 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center p-8 gap-6">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            referrerPolicy="no-referrer"
            data-tooltip-id="user-tooltip"
            data-tooltip-content={user?.displayName || "User"}
            data-tooltip-place="top"
            src={
              user?.photoURL ||
              "https://i.ibb.co/3W0qL4N/avatar.png"
            }
            alt={user?.displayName || "User"}
            className="rounded-full border-4 border-white shadow-md w-32 h-32 object-cover"
          />
          <Tooltip id="user-tooltip" />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-2xl font-bold  mb-1">
            {user?.displayName || "N/A"}
          </h2>
          <p className="text-sm  mb-3">🌿 Plant Lover</p>
          <p className="text-base mb-2">
            <span className="font-semibold">📧 Email:</span> {user?.email}
          </p>
          <div className="mt-4 flex justify-center md:justify-start gap-10">
            <div>
              <p className="text-lg font-bold ">20,160</p>
              <p className="text-sm text-gray-500">Followers</p>
            </div>
            <div>
              <p className="text-lg font-bold ">478,888</p>
              <p className="text-sm text-gray-500">Following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
