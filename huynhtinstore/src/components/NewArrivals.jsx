import React, { useEffect, useState } from 'react';
import ButtonGroud from './ButtonGroud';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import ListProduct from './ListProduct';

const NewArrivals = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost/api/getProductsLatest',
        })
            .then(function (response) {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])
    const handleGetallProducts = () => {
        axios({
            method: 'get',
            url: 'http://localhost/api/getallproducts',
        })
            .then(function (response) {
                setProducts(response.data);
                console.log(response.data);
            });
    }
    return (
        <div className='mt-[10%]'>
            <h1 className=' text-center text-[46px] font-[Poppins]'>New Arrivals</h1>
            <p className='text-center text-[16px] font-[Poppins]  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin  </p>
            <ButtonGroud />
            {/* <div className='grid grid-cols-3  items-center justify-center'> */}
                {products.length > 0 && products.map((product) => (
                //    <ProductItem key={product.id} id={product.id} name={product.name} image={product.image} price={product.price} description={product.description}/>
                
                <ListProduct key={product.id} productTypeId={product.id} />
                ))}
            {/* </div> */}
            {products.length <= 0 &&
                <img className='w-full h-[400px]' src="https://i.pinimg.com/564x/f3/19/10/f31910b49320f572516355d748a617f3.jpg">
                </img>
            }
            {products.length <= 3 && (
                <div className='flex items-center justify-center mt-6'>
                    <button onClick={handleGetallProducts} className='w-[207px] h-[56px] bg-black text-white rounded-lg hover:bg-white hover:text-black font-[poppins]'>View All</button>
                </div>
            )}

        </div>
    );
}

export default NewArrivals;
