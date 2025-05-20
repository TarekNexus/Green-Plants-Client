import React from 'react';
import Slider from '../components/Slider';
import PlantCareMistakes from '../components/PlantCareMistakes';
import UserPlants from '../components/UserPlants';
import NewPlants from '../components/NewPlants';




const Home = () => {
    return (
        <div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
            <Slider></Slider>
            <NewPlants></NewPlants>
            <UserPlants></UserPlants>
            <PlantCareMistakes></PlantCareMistakes>
            
            
        </div>
    );
};

export default Home;