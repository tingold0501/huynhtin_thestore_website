import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ButtonFixed from '../components/ButtonFixed';
import Carousel from '../components/Carousel';
import CarouselSwiper from '../components/CarouselSwiper';

const Home = () => {
    const slides = [
        'https://i.pinimg.com/474x/87/3a/20/873a20a4ad7e6696d8fe9fed1e1f41be.jpg',
        'https://i.pinimg.com/474x/6b/ad/0f/6bad0f885aba9603355c388a80c36fa1.jpg',
        'https://i.pinimg.com/474x/ba/af/1a/baaf1a44eb11424428583269b87718ed.jpg',
    ]
    return (
        <div className='w-full flex flex-col items-center justify-center relative'>
            <Navbar />
            <Carousel/>

        </div>
    );
}

export default Home;
