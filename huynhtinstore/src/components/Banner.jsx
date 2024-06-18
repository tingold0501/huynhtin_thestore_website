import React from 'react';
import image1 from '../assets/images/image 2 28.png';
import image2 from '../assets/images/image 227.png';
import image3 from '../assets/images/image-2.png';
import image4 from '../assets/images/image.png';
const Banner = () => {
    return (
        <div className='flex items-center justify-between h-[756px]'>
            <div className='w-[392px] rounded-2xl h-full flex justify-center items-end bg-[#E0E0E0]'>
                <img src={image1} alt="" srcset="" />
            </div>
            <div className='w-[392px] rounded-2xl h-full flex flex-col justify-between'>
                <div className='h-[150px] flex items-end bg-[#E0E0E0] rounded-xl'>
                    <img src={image4} alt="" srcset="" />
                </div>
                <div className='h-[383px] text-center'>
                    <p className='text-[91px]'>ULTIMATE</p>
                    <p className='text-[120px] stroke'>SALE</p>
                    <p>NEW COLLECTION</p>
                    <button className='w-[207px] h-[56px] rounded-xl mt-4 mb-4 bg-black text-white' type="button">SHOP NOW</button>
                </div>
                <div className='h-[150px] flex items-end'>
                    <img className='w-full h-full' src={image3} alt="" srcset="" />
                </div>
            </div>
            <div className=' w-[392px] rounded-2xl h-full flex justify-center items-end bg-[#E0E0E0]'>
                <img className='' src={image2} alt="" srcset="" />

            </div>
        </div>
    );
}

export default Banner;
