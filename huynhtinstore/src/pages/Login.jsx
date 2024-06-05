import React from 'react';
import ImageLogin from '../assets/images/Login Image.png';
import Googlelogin from '../components/GoogleLogin';
import FaceBookLogin from '../components/FaceBookLogin';
const Login = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='flex w-[75%]'>
                <div className='w-full flex items-center justify-center'>
                    <img className='w-full' src={ImageLogin} alt="" />
                </div>
                <div className='w-full'>
                    <p>GT-STORE</p>
                    <p>Sign in to GT-STORE</p>
                    <Googlelogin/>
                    <FaceBookLogin/>
                </div>
            </div>
        </div>
    );
}

export default Login;
