import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Arrivals from '../components/Arrivals';

const Home = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <Navbar/>
            <Carousel/>
            <Arrivals/>
        </div>
    );
}

export default Home;
