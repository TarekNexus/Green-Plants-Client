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
     
            <Slider></Slider>
            <NewPlants lastPlantData={lastPlantData}></NewPlants>
            <UserPlants  ></UserPlants>
            <PlantCareMistakes></PlantCareMistakes>
            <ScrollRestoration></ScrollRestoration>
            
            
        </div>
    );
};

export default Home;