import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import axios from 'axios';

const ListProduct = ({ productTypeId }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (productTypeId) {
            axios.get(`http://localhost/api/getProductsByType${productTypeId}`, {
                params: { producttype_id: productTypeId }
            })
                .then(response => {
                    setProducts(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the products!", error);
                });
        }
    }, [productTypeId]); // Chỉ chạy khi productTypeId thay đổi
    return (
        <div className='grid grid-cols-3  items-center justify-center'>
            {products.length > 0 && products.map((product) => (
                <ProductItem key={product.id} id={product.id} name={product.name} image={product.image} price={product.price} description={product.description} />
            ))}
        </div>
    );
}

export default ListProduct;
