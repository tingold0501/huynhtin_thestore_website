import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const ButtonFixed = () => {
    return (
        <div>
            <button className='absolute bottom-40 right-[-200px] w-[56px] h-[56px] bg-white rounded-full border border-gray-500 flex items-center justify-center hover:bg-black hover:text-white hover:border hover:border-gray-600'>
                <ArrowUpwardIcon/>
            </button>
            <button className='absolute bottom-40 right-[-110px] w-[56px] h-[56px] text-white bg-black  rounded-2xl flex items-center justify-center hover:bg-white hover:text-black hover:border hover:border-gray-600'>
                <ShoppingCartIcon/>
            </button>
        </div>
    );
}

export default ButtonFixed;
