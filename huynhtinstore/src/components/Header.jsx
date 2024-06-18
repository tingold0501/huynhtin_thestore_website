import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const token = localStorage.getItem("token");
    const logout = () => {
        localStorage.removeItem("token");
        window.location.replace("/");
    }
    return (
        <div className='mt-10 mb-20'>
            <ul className='flex items-center justify-between'>
                <li className='cursor-pointer text-[52px] w-[40%]'>GT-Store</li>
                <li className='cursor-pointer hover:underline hover:decoration-gray-500'>Home</li>
                <li className='cursor-pointer hover:underline hover:decoration-gray-500'>About</li>
                <li className='cursor-pointer hover:underline hover:decoration-gray-500'>Services</li>
                <li className='cursor-pointer hover:underline hover:decoration-gray-500'>Contact</li>
                {!token ? (
                    <div className='flex items-center space-x-8'>
                        <Link to={"/login"}>
                            <li className='cursor-pointer w-[152px] h-[56px] border-collapse border border-gray-300 rounded-2xl flex items-center justify-center hover:bg-black hover:text-white'>Sign In</li>
                        </Link>
                        <Link to={"/register"}>
                            <li className='cursor-pointer w-[152px] h-[56px] bg-black text-white rounded-2xl flex items-center justify-center hover:bg-white hover:text-black hover:border hover:border-gray-600'>Sign Up</li>
                        </Link>
                    </div>
                ) : (
                    <li onClick={logout} className='cursor-pointer w-[152px] h-[56px] bg-black text-white rounded-2xl flex items-center justify-center hover:bg-white hover:text-black hover:border hover:border-gray-600'>Sign Out</li>
                )}
            </ul>
        </div>
    );
}

export default Header;
