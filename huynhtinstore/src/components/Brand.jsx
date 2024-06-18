import React from 'react';
import logo from '../assets/logos/logo.png';
import logo1 from '../assets/logos/logo-4.png';
import logo2 from '../assets/logos/logo-3.png';
import logo3 from '../assets/logos/logo-2.png';
import logo4 from '../assets/logos/logo-1.png';
const Brand = () => {
    return (
        <div className='flex flex-row items-center justify-between mt-20'>
            <div>
                <img src={logo1} alt="" srcset="" />
            </div>
            <div>
                <img src={logo2} alt="" srcset="" />
            </div>
            <div>
                <img src={logo3} alt="" srcset="" />
            </div>
            <div>
                <img src={logo4} alt="" srcset="" />
            </div>
            <div>
                <img src={logo} alt="" srcset="" />
            </div>
        </div>
    );
}

export default Brand;
