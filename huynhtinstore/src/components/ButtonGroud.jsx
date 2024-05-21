import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ButtonGroud = () => {
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
    const [productType, setProductType] = useState([]);
    const [products, setProducts] = useState([]);
    const [ID, setID] = useState(0);
    useEffect(() => {
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
    }, []);
    const handleGetProductID = (id, name) => {
        console.log(id, name);
        axios({
            method: 'get',
            url: `http://localhost/api/getProductsByType/${id}`,
        })
            .then(function (response) {
                console.log(id);
                setProducts(response.data);
                setID(id);
                console.log(response.data, id);
                if (products.length > 0) {
                    toast.success('🦄 Đã tìm thấy sản phẩm!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                else if (products.length <= 0) {
                    toast.warning('🦄 Không có sản phẩm nào với loại này!', {
                        position: "top-right",
                        autoClose: 2000,
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
    return (
        <div className='flex items-center justify-center'>
            <ToastContainer />
            <div className='w-[90%] flex justify-between'>
                {productType.length > 0 && productType.map((productType, key) => (
                    <button key={productType.id} onClick={() => handleGetProductID(productType.id, productType.name)} className='w-[207px] h-[56px] bg-[#FAFAFA] text-[#8A8A8A] rounded-xl font-[poppins] text-[16px] mt-8 mb-5 hover:bg-white hover:text-black'>{productType.name}</button>
                ))}
            </div>
        </div>
    );
}

export default ButtonGroud;
