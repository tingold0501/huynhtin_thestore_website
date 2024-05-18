import React from 'react';
import Logo from '../assets/logo/logo.png';
import Image1 from '../assets/images/image 2 28.png';
import Image2 from '../assets/images/image 227.png';
import Image3 from '../assets/images/image-2.png';
import Image4 from '../assets/images/image.png';
import Logo1 from '../assets/logo/logo-1.png';
import Logo2 from '../assets/logo/logo-2.png';
import Logo3 from '../assets/logo/logo-3.png';
import Logo4 from '../assets/logo/logo-4.png';
import Logo5 from '../assets/logo/logo-5.png';
import NewArrivals from './NewArrivals';
const Navbar = () => {
    return (
        <nav className="mt-12 w-[80%] ">
            <ul className='flex items-center justify-between font-[regular]'>
                <li className='w-[30%] text-[52px]'>GT-Store</li>
                <li className='text-[16px] text-[#484848] hover:text-gray-500 hover:underline hover:underline-offset-8 cursor-pointer'>Home</li>
                <li className='text-[16px] text-[#484848] hover:text-gray-500 hover:underline hover:underline-offset-8 cursor-pointer'>Deals</li>
                <li className='text-[16px] text-[#484848] hover:text-gray-500 hover:underline hover:underline-offset-8 cursor-pointer'>New Arrivals</li>
                <li className='text-[16px] text-[#484848] hover:text-gray-500 hover:underline hover:underline-offset-8 cursor-pointer'>Packages</li>
                <li className='text-[16px] text-[#484848] hover:bg-[#000000] rounded-lg hover:text-white w-[152px] h-[56px]'><button className='w-full  h-full'>Sign In</button></li>
                <li className='text-[16px] text-[#484848] bg-slate-500 hover:bg-[#000000] rounded-lg hover:text-white w-[152px] h-[56px]'><button className='w-full  h-full'>Sign Up</button></li>
            </ul>
            <div className='w-full flex  mt-[10%] '>
                <div className=' w-full '>
                    <div className='w-full h-full  bg-[#E0E0E0] rounded-lg flex items-end justify-center'>
                        <img src={Image1} alt="logo" />
                    </div>
                </div>
                <div className=' w-full mr-4 ml-4'>
                    <div className='w-full h-full   rounded-lg '>
                        <img className='w-full ' src={Image4} alt="logo" />
                        <div className='text-center w-full'>
                            <p className='text-[91px] text-[#484848] font-[Poppins]'>ULTIMATE</p>
                            <p className='text-[187px] text-outline font-[Poppins] uppercase'>SALE</p>
                            <p className='text-[20px] font-[Poppins] text-[#484848]'>NEW COLLECTION</p>
                            <button className=' w-[207px] h-[56px] bg-[#000000] rounded-xl text-white mt-8 mb-5 hover:bg-white hover:text-black'>SHOP NOW</button>
                        </div>
                        <img className='w-full 'src={Image3} alt="logo" />
                    </div>
                </div>
                <div className=' w-full  '>
                    <div className=' bg-[#E0E0E0] h-full rounded-lg flex items-end justify-center'>
                        <img src={Image2} alt="logo" />
                    </div>
                </div>
            </div>
            <div className='w-full flex mt-[10%] items-center justify-between'>
                <img src={Logo1} alt="logo" />
                <img src={Logo2} alt="logo" />
                <img src={Logo3} alt="logo" />
                <img src={Logo4} alt="logo" />
                <img src={Logo5} alt="logo" />
            </div>
            <NewArrivals/>
            <div className='flex items-center justify-center mt-6'>
                <button className='w-[207px] h-[56px] bg-black text-white rounded-lg hover:bg-white hover:text-black font-[poppins]'>View All</button>
            </div>
        </nav>
    );
}

export default Navbar;
