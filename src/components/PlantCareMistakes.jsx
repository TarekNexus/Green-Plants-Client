import React from 'react';
import { Droplet, Sun, Bug } from "lucide-react";

const PlantCareMistakes = () => {
  const steps = [
    {
      id: "01",
      icon: <Droplet className="w-8 h-8 text-green-600" />,
      title: "Overwatering",
      desc: "Let the soil dry before watering again.",
    },
    {
      id: "02",
      icon: <Sun className="w-8 h-8 text-green-600" />,
      title: "Lack of Light",
      desc: "Plants need proper light to thrive.",
    },
    {
      id: "03",
      icon: <Bug className="w-8 h-8 text-white" />,
      title: "Ignoring Pests",
      desc: "Check leaves and treat infestations early.",
    },
  ];

  return (
    <section className="py-16 px-4  text-center relative">
      <div className="w-11/12 mx-auto">
        <h4 className="text-green-600 font-semibold uppercase tracking-wider mb-2">
          🌿 Informative & Clear
        </h4>
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Common Plant Care Mistakes to Avoid
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative z-10 rounded-2xl text-center border p-6
                transition-transform duration-300 ease-in-out shadow-lg
                hover:scale-105 hover:shadow-2xl
                ${
                  index === 2
                    ? "bg-green-600 border-green-600 text-white"
                    : "bg-white border-green-200"
                }
              `}
              style={{ flex: "1 1 0" }}
            >
              <div
                className={`w-16 h-16 mb-4 flex items-center justify-center rounded-full border shadow
                  ${
                    index === 2
                      ? "bg-green-500 border-white"
                      : "bg-white border-green-300"
                  }
                `}
              >
                {step.icon}
              </div>

              <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full shadow">
                {step.id}
              </span>

              <h4
                className={`text-lg font-semibold mt-2 ${
                  index === 2 ? "text-white" : "text-green-800"
                }`}
              >
                {step.title}
              </h4>
              <p
                className={`mt-1 text-sm leading-relaxed ${
                  index === 2 ? "text-green-100" : "text-gray-600"
                }`}
              >
                {step.desc}
              </p>
            </div>
          ))}

          {/* Connector dashed line only on desktop */}
          <div className="hidden md:flex absolute top-16 left-10 right-10 z-0 pointer-events-none">
            <div className="flex justify-between w-full">
              <div className="border-t border-dashed border-green-400 w-full mx-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantCareMistakes;
