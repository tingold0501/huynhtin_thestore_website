import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const ArrivalsItem = () => {
    return (
        <div className='cursor-pointer w-full h-full shadow-2xl rounded-3xl shadow-gray-400 flex items-center justify-center'>
            <div className='w-[90%] h-[450px] mt-6'>
                <div className='w-full h-[250px] bg-slate-500 rounded-3xl'>
                    <img className='h-full w-full rounded-3xl object-fill hover:object-scale-down' src="https://i.pinimg.com/564x/fe/75/d2/fe75d2125bb319a4d3d22b9d81fd308d.jpg" alt="" />
                </div>
                <div className='w-full flex justify-between mt-4'>
                    <p className='text-[20px] text-[#484848]'>Shiny Dress</p>
                    <div className='text-[#FCA120]'>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon /> 
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </div>

                </div>
                <p className='text-[#8A8A8A] text-[12px]'>Al Karam</p>
                <p className='text-[#8A8A8A] text-[12px] mt-6 mb-6'><span>(4.1k)</span> Customer Reviews</p>
                <div className='flex justify-between'>
                    <p className=' text-[24px]'>$95.50</p>
                    <p className='text-[#FF4646] text-[12px] mt-3'>Almost Sold Out</p>
                </div>
            </div>

        </div>
    );
}

export default ArrivalsItem;
