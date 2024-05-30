import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewArrivals = () => {
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
    {/* Same as */ }
    <ToastContainer />
    const [products, setProducts] = useState([]);
    const [productType, setProductType] = useState([]);
    const handleGetProductID = (id, name) => {
        console.log(id, name);
        axios({
            method: 'get',
            url: `http://localhost/api/getProductsByType/${id}`,
        })
            .then(function (response) {
                console.log(id);
                setProducts(response.data.products);
                console.log(response, id);
                if(response.data.check == true){
                    toast.success(response.data.msg, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                else if(response.data.check == false){
                    toast.error(response.data.msg, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
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
        axios({
            method: 'get',
            url: 'http://localhost/api/getallproductTypes',
        })
            .then(function (response) {
                setProductType(response.data);
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
                <ToastContainer />
            <h1 className=' text-center text-[46px] font-[Poppins]'>New Arrivals</h1>
            <p className='text-center text-[16px] font-[Poppins]  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin  </p>
            <div className='flex items-center justify-center'>
                <div className='w-[90%] flex justify-between'>
                    {productType.length > 0 && productType.map((productType, key) => (
                        <button key={productType.id} onClick={() => handleGetProductID(productType.id, productType.name)} className='w-[207px] h-[56px] bg-[#FAFAFA] text-[#8A8A8A] rounded-xl font-[poppins] text-[16px] mt-8 mb-5 hover:bg-white hover:text-black'>{productType.name}</button>
                    ))}
                </div>
            </div>
            <div className='grid grid-cols-3  items-center justify-center'>
                {products.length > 0 && products.map((product) => (
                    <ProductItem key={product.id} id={product.id} name={product.name} image={product.image} price={product.price} description={product.description} />
                ))}
            </div>
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
