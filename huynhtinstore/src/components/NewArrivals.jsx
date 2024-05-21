import React, { useEffect, useState } from 'react';
import ButtonGroud from './ButtonGroud';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
const NewArrivals = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost/api/getallproducts',
        })
            .then(function (response) {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <div className='mt-[10%]'>
            <h1 className=' text-center text-[46px] font-[Poppins]'>New Arrivals</h1>
            <p className='text-center text-[16px] font-[Poppins] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin  </p>
            <ButtonGroud />
                <div className='grid grid-cols-4  items-center justify-center'>
            {products.length > 0 && products.map((product) => (

                    <div className=' shadow cursor-pointer hover:translate-y-5 rounded-lg m-4 flex items-center justify-center'>
                        <div className='w-[90%]'>
                            <img className=' h-[300px] w-full mt-4 rounded-xl' src={product.image} alt="" />
                            <div className='flex mt-4'>
                                <div className='w-[60%]'>
                                    <p className='text-[20px] text-[#484848]' >{product.name}</p>
                                </div>
                                <div className='w-[40%] flex items-center justify-end'>
                                    <StarIcon className='text-[#F2994A]' />
                                    <StarIcon className='text-[#F2994A]' />
                                    <StarIcon className='text-[#F2994A]' />
                                    <StarIcon className='text-[#F2994A]' />
                                    <StarIcon className='text-[#F2994A]' />
                                </div>
                            </div>
                            <p className='text-[#8A8A8A] text-[12px]'>Al Karam</p>
                            <p className='text-[#484848] text-[12px] mt-4 mb-4'><span>(4.1k)</span> Customer Reviews</p>
                            <div className='flex  '>
                                <p className='text-[#484848] text-[24px] w-[70%]'>{product.price}</p>
                                <p className='text-[#FF4646] text-[12px] w-[30%] mt-2'>Almost Sold Out</p>
                            </div>
                        </div>
                    </div>
            ))}
                </div>

            {products.length <= 0 && 
            <img className='w-full h-[400px]' src="https://i.pinimg.com/564x/f3/19/10/f31910b49320f572516355d748a617f3.jpg">
            </img>
            }

        </div>
    );
}

export default NewArrivals;
