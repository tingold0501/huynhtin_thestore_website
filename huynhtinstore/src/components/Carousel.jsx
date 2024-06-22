import React, { useState } from 'react';

import ImageCarousel from '../assets/images/imagecarousel.png';
import AdjustIcon from '@mui/icons-material/Adjust';
import CarouselSwiper from './CarouselSwiper';
import { SwiperSlide } from 'swiper/react';
import slide_image_1 from '../assets/images/imagecarousel.png';

const Carousel = ({ children: slides }) => {
    
    return (
        <div className=' mt-32 w-full bg-[#eeeeee] h-[782px] flex items-center justify-end'>
            <div className='w-[85%] h-[80%] flex'>
                <div className='w-[30%] h-full flex-col space-y-10 '>
                    <div className='mt-[10%] flex flex-col space-y-10'>
                        <p className='text-[46px] text-[#484848]'>Deals Of The Month</p>
                        <p className='text-[#8A8A8A] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                        <button className='w-[207px] h-[56px] rounded-xl mt-4 bg-black text-white' type="button">BUY NOW</button>
                        <p className='text-[#484848] text-[28px]'>Hurry, Before It’s Too Late!</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div>
                            <div className='w-[76px] h-[76px] bg-white shadow-xl rounded-lg flex items-center justify-center'>
                                <p className='text-[32px]'>02</p>
                            </div>
                            <p className=' text-center text-[24px] mt-2'>Days</p>
                        </div>
                        <div>
                            <div className='w-[76px] h-[76px] bg-white shadow-xl rounded-lg flex items-center justify-center'>
                                <p className='text-[32px]'>02</p>
                            </div>
                            <p className=' text-center text-[24px] mt-2'>Hr</p>
                        </div>
                        <div>
                            <div className='w-[76px] h-[76px] bg-white shadow-xl rounded-lg flex items-center justify-center'>
                                <p className='text-[32px]'>02</p>
                            </div>
                            <p className=' text-center text-[24px] mt-2'>Mins</p>
                        </div>
                        <div>
                            <div className='w-[76px] h-[76px] bg-white shadow-xl rounded-lg flex items-center justify-center'>
                                <p className='text-[32px]'>02</p>
                            </div>
                            <p className=' text-center text-[24px] mt-2'>SEC</p>
                        </div>
                    </div>
                </div>
                <div className='w-[75%] flex relative'>
                    <div className='w-[15%] h-full flex flex-col justify-end ml-5'>
                        <div>
           
                        </div>
                    </div>
                    <div className='w-full h-full '>
                        <div className='w-full h-full'>
                            <CarouselSwiper/>
                        </div>
                        {/* <div>
                            <div className=''>
                                <AdjustIcon />
                            </div>
                        </div> */}

                    </div>
                    <div className='absolute top-[450px] right-[750px] w-[217px] h-[130px] bg-white flex flex-col z-40 justify-center'>
                        <div className='ml-5'>
                            <p className='text-[16px]'>01 - <span>Spring Sale</span></p>
                            <p className='text-[28px]'>30% <span>OFF</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
