import React, { useEffect } from 'react';
import Slider from '../components/Slider';
import PlantCareMistakes from '../components/PlantCareMistakes';
import UserPlants from '../components/UserPlants';
import NewPlants from '../components/NewPlants';
import { ScrollRestoration, useLoaderData } from 'react-router';




const Home = () => {
    const lastPlantData=useLoaderData();
     useEffect(() => {
        document.title = "Home | Green Plants";
      }, []);
    return (
        <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <Slider></Slider>
            <NewPlants lastPlantData={lastPlantData}></NewPlants>
            <UserPlants  ></UserPlants>
            <PlantCareMistakes></PlantCareMistakes>
            <ScrollRestoration></ScrollRestoration>
            
            
        </div>
    );
};

export default Home;