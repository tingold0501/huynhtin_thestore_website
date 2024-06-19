import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ButtonFixed from '../components/ButtonFixed';
import Carousel from '../components/Carousel';

const Home = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center relative'>
            <Navbar/>
            <Carousel/>
        </div>
    );
}

export default Home;
