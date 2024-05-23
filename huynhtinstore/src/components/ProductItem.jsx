import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const ProductItem = ({id, name, image, price, description}) => {
    return (
        <div key={id} className='shadow cursor-pointer hover:translate-y-5 rounded-lg m-4 flex items-center justify-center'>
            <div className='w-[90%]'>
                <img className='h-[300px] w-full mt-4 rounded-xl' src={image} alt="" />
                <div className='flex mt-4'>
                    <div className='w-[60%]'>
                        <p className='text-[20px] text-[#484848]'>{name}</p>
                    </div>
                    <div className='w-[40%] flex items-center justify-end'>
                        <StarIcon className='text-[#F2994A]' />
                        <StarIcon className='text-[#F2994A]' />
                        <StarIcon className='text-[#F2994A]' />
                        <StarIcon className='text-[#F2994A]' />
                        <StarIcon className='text-[#F2994A]' />
                    </div>
                </div>
                <p className='text-[#8A8A8A] text-[12px]'>{description}</p>
                <p className='text-[#484848] text-[12px] mt-4 mb-4'><span>(4.1k)</span> Customer Reviews</p>
                <div className='flex'>
                    <p className='text-[#484848] text-[24px] w-[70%]'>{price}</p>
                    <p className='text-[#FF4646] text-[12px] w-[30%] mt-2'>Almost Sold Out</p>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
