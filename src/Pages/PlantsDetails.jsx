import React, { useEffect } from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";

const PlantsDetails = () => {
  const plant = useLoaderData();
 useEffect(() => {
    document.title = "Plant Details | Green Plants";
  }, []);
  return (
    <div className="w-11/12 mx-auto p-6">
      <ScrollRestoration></ScrollRestoration>
     
      {/* Title and description */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-600 mb-3">
          Plant Details
        </h1>
        <p className=" text-lg max-w-xl mx-auto">
          Explore the detailed information about this plant including its care
          routine, category, and more.
        </p>
      </div>

      {/* Card */}
      <div className="card flex flex-col lg:flex-row  border border-emerald-100 shadow-md rounded-md overflow-hidden">
        {/* Image */}
        <figure
          className="bg-emerald-100 overflow-hidden rounded-t-md lg:rounded-t-none lg:rounded-l-md flex-shrink-0"
          style={{ width: "100%", height: "300px" }} // default height for small screens
        >
          <img
            src={plant.image}
            alt={plant.plantName}
            className="object-cover w-full h-full transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </figure>

        {/* Info Section */}
        <div className="card-body p-6 lg:p-8" style={{ maxWidth: "100%" }}>
          <h2 className="card-title text-3xl text-green-600 font-semibold mb-4">
            {plant.plantName}
          </h2>
          <p className=" text-base mb-6">{plant.description}</p>

          <div className="space-y-4  text-lg">
            <p>
              <span className="font-semibold text-green-600">Category:</span>{" "}
              {plant.category}
            </p>
            <p>
              <span className="font-semibold text-green-600">
                Care Level:
              </span>{" "}
              {plant.careLevel}
            </p>
            <p>
              <span className="font-semibold text-green-600">
                Health Status:
              </span>{" "}
              {plant.healthStatus}
            </p>
            <p>
              <span className="font-semibold text-green-600">
                Watering Frequency:
              </span>{" "}
              {plant.wateringFrequency || "N/A"}
            </p>
            <p>
              <span className="font-semibold text-green-600">
                Last Watered Date:
              </span>{" "}
              {plant.lastWateredDate}
            </p>
            <p>
              <span className="font-semibold text-green-600">
                Next Watering Date:
              </span>{" "}
              {plant.nextWateringDate}
            </p>

            <hr className="border-emerald-200" />

            <p>
              <span className="font-semibold text-green-600">Added By:</span>{" "}
              {plant.userName}
            </p>
            <p>
              <span className="font-semibold text-green-600">Email:</span>{" "}
              {plant.userEmail}
            </p>
          </div>
        </div>
      </div>

      {/* Responsive styling with Tailwind custom breakpoints */}
      <style>
        {`
  @media (min-width: 1024px) {
    figure {
      width: 700px !important;
      height: 533px !important;
    }
  }
`}
      </style>
    </div>
  );
};

export default PlantsDetails;
