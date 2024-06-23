import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const ArrivalsItem = () => {
    return (
        <div className='w-full'>
            <div className='w-full '>
                <img className='h-[300px]' src="https://i.pinimg.com/564x/fe/75/d2/fe75d2125bb319a4d3d22b9d81fd308d.jpg" alt="" />
            </div>
            <div className='w-full flex flex-row items-end'>
                <p>Shiny Dress</p>
                <StarIcon />
            </div>
            <p>Al Karam</p>
            <p><span>(4.1k)</span> Customer Reviews</p>
            <div>
                <p>$95.50</p>
                <p>Almost Sold Out</p>
            </div>
        </div>
    );
}

export default ArrivalsItem;
