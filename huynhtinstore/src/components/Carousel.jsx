import React from 'react';

const Carousel = () => {
    return (
        <div className=' mt-32 w-full bg-[#eeeeee] h-[782px] flex items-center justify-end'>
            <div className='w-[85%] h-[80%] '>
                <div className='w-[30%] h-full flex-col space-y-10 '>
                    <div className='mt-[10%] flex flex-col space-y-10'>
                        <p className='text-[46px] text-[#484848]'>Deals Of The Month</p>
                        <p className='text-[#8A8A8A] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                        <button className='w-[207px] h-[56px] rounded-xl mt-4 bg-black text-white' type="button">BUY NOW</button>
                        <p className='text-[#484848] text-[28px]'>Hurry, Before It’s Too Late!</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='w-[76px] h-[76px] bg-white shadow-xl rounded-lg'>

                        </div>
                        <div className='w-[76px] h-[76px] bg-white shadow-xl rounded-lg'>

                        </div>
                        <div className='w-[76px] h-[76px] bg-white shadow-xl rounded-lg'>

                        </div>
                        <div className='w-[76px] h-[76px] bg-white shadow-xl rounded-lg'>

                        </div>
                    </div>
                </div>
                <div className='w-[65%]'>

                </div>
            </div>
        </div>
    );
}

export default Carousel;
