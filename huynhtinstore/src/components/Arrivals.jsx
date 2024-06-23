import React from 'react';
import ArrivalsItem from './ArrivalsItem';
const Arrivals = () => {
    return (
        <div className='w-[70%] flex flex-col justify-center items-center'>
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='w-[30%] text-center'>
                    <p>New Arrivals</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                </div>
            </div>
            <div className='w-full grid grid-cols-3 items-center justify-between'>
                <ArrivalsItem />
                <ArrivalsItem />
                <ArrivalsItem />
            </div>

        </div>
    );
}

export default Arrivals;
