import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { getUsers, getProducts } from '../services/apiGetServices';

const Home = () => {
    const fetchUsers = async () => {
        const response = await getUsers();
        console.log(response);
        if(response.status === 200) {
            console.log(response);
        }
    };
    const fetchProducts = async () => {
        const response = await getProducts();
        console.log(response);
        if(response.status === 200) {
            console.log(response);
        }
    };
    useEffect(() => {
        fetchUsers();
        fetchProducts();
    },[]);
    return (
        <div>
            <Navbar/>
        </div>
    );
}

export default Home;
