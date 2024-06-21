import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Brand from './Brand';
import ButtonFixed from './ButtonFixed';
import ImageCarousel from '../assets/images/imagecarousel.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const token = localStorage.getItem("token");

    const logout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    const slides = [
        ImageCarousel,
        ImageCarousel,
        ImageCarousel,
    ]
    return (
        <div className='w-[70%] relative'>
            <Header/>
            <Banner/>
            <Brand/>
            <ButtonFixed />
        </div>
    );
};

export default Navbar;
