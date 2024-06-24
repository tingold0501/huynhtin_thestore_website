import React from 'react';
import ArrivalsItem from './ArrivalsItem';
const Arrivals = () => {
    return (
        <div className='w-[70%] flex flex-col justify-center items-center mt-20'>
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='w-[40%] text-center'>
                    <p className='text-[46px] text-[#484848]'>New Arrivals</p>
                    <p className='text-[#8A8A8A] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                </div>
            </div>
            <div className='w-full grid grid-cols-3 items-center justify-between gap-10'>
                <ArrivalsItem />
                <ArrivalsItem />
                <ArrivalsItem />
                <ArrivalsItem />
            </div>

        </div>
    );
}

export default Arrivals;
