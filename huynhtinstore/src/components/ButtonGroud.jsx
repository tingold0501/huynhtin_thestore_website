import React from 'react';

const ButtonGroud = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='w-[90%] flex justify-between'>
                <button className='w-[207px] h-[56px] bg-[#FAFAFA] text-[#8A8A8A] rounded-xl font-[poppins] text-[16px] mt-8 mb-5 hover:bg-white hover:text-black'>Men’s Fashion</button>
                <button className='w-[207px] h-[56px] bg-[#FAFAFA] text-[#8A8A8A] rounded-xl font-[poppins] text-[16px] mt-8 mb-5 hover:bg-white hover:text-black'>Women’s Fashion</button>
                <button className='w-[207px] h-[56px] bg-[#FAFAFA] text-[#8A8A8A] rounded-xl font-[poppins] text-[16px] mt-8 mb-5 hover:bg-white hover:text-black'>Women Accessories</button>
                <button className='w-[207px] h-[56px] bg-[#FAFAFA] text-[#8A8A8A] rounded-xl font-[poppins] text-[16px] mt-8 mb-5 hover:bg-white hover:text-black'>Men Accessories</button>
                <button className='w-[207px] h-[56px] bg-[#FAFAFA] text-[#8A8A8A] rounded-xl font-[poppins] text-[16px] mt-8 mb-5 hover:bg-white hover:text-black'>Discount Deals</button>
            </div>
        </div>
    );
}

export default ButtonGroud;
