import React from 'react';

const Carousel = () => {
    return (
        <div className=' mt-32 w-full bg-[#eeeeee] h-[782px] flex items-center justify-end'>
            <div className='w-[85%] h-[80%] bg-red-200'>
                <div>
                    <p className='text-[46px] text-[#484848]'>Deals Of The Month</p>
                    <p className='text-[#8A8A8A] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                    <button className='w-[207px] h-[56px] rounded-xl mt-4 bg-black text-white' type="button">BUY NOW</button>
                    <p className='text-[#484848] text-[28px]'>Hurry, Before It’s Too Late!</p>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
