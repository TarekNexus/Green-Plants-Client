import React from 'react';
import Slider from '../components/Slider';
import PlantCareMistakes from '../components/PlantCareMistakes';
import UserPlants from '../components/UserPlants';
import NewPlants from '../components/NewPlants';




const Home = () => {
    return (
        <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <Slider></Slider>
            <NewPlants></NewPlants>
            <UserPlants></UserPlants>
            <PlantCareMistakes></PlantCareMistakes>
            
            
        </div>
    );
};

export default Home;