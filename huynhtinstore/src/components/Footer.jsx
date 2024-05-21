import React from 'react';
import ImageFooter1 from '../assets/images/image 2.png';
import ImageFooter2 from '../assets/images/image 3.png';
const Footer = () => {
    return (
        <div className='flex items-center justify-between mt-20'>
            <div>
                <img src={ImageFooter1} alt="" />
            </div>
            <div className='text-center'>
                <h1 className='text-[46px] text-[#484848] font-[Poppins]'>Subscribe To Our Newsletter</h1>
                <p className='text-[16px] text-[#8A8A8A] mt-4 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin</p>
                <input className='px-4 shadow-2xl w-full h-16 rounded-xl outline-none shadow-gray-400' type="text" placeholder='example@gmail.com' />
                <button className='w-[207px] h-[56px] bg-[#000000] rounded-xl text-white mt-8 mb-5 hover:bg-white hover:text-black'>Subscribe Now</button>
            </div>
            <div>
                <img src={ImageFooter2} alt="" />
            </div>
        </div>
    );
}

export default Footer;
