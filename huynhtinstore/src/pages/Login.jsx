import { React, useState } from 'react';
import BannerLogin from '../assets/images/bannerLogin.png';
import LoginGoogle from '../components/LoginGoogle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (email === "" || password === "") {
            toast.error("Please enter your email and password");
        } else {
            axios
                .post("http://localhost/api/login", {
                    email: email,
                    password: password,
                })
                .then((response) => {
                    if (response.data.check == true) {
                        toast.success(response.data.msg);
                        setTimeout(() => {
                            window.location.replace("/");
                            localStorage.setItem("token", response.data.token);
                        },2000)

                    } else {
                        toast.error(response.data.msg);
                    }
                })
                .catch((error) => {
                    toast.error(error.response.data.message);
                });
        }
    };
    return (
        <div className='h-screen flex justify-center items-center '>
            <ToastContainer />
            <div className=' w-2/3  flex items-center justify-between border border-gray-300 rounded-3xl'>
                <div className='w-full'>
                    <img src={BannerLogin} alt="" />
                </div>
                <div className='ml-10  mr-10 h-3/4  flex flex-col justify-between'>
                    <p className='text-[#484848] text-[66px]'>GT-Store </p>
                    <p className='text-[#000000] text-[30px]'>Sign In To GT-Store</p>
                    <div className='w-full flex justify-between mt-6'>
                        <LoginGoogle />
                        <LoginGoogle />
                    </div>
                    <div className='w-full flex items-center justify-center mt-8 mb-8'>
                        <div className="flex items-center">
                            <div class="bg-black h-0.5 w-5 mr-2"></div>
                            <span>Or</span>
                            <div className="bg-black h-0.5 w-5 ml-2"></div>
                        </div>
                    </div>
                    <div className='flex flex-col mb-6'>
                        <input onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="text" class="border-0 border-b  border-gray-300 focus:outline-none focus:border-blue-500" />
                        <input onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password" class=" mt-10 border-0 border-b border-gray-300 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className='flex flex-col items-center'>
                        <button onClick={handleLogin} className='w-[575px] h-[60px] rounded-xl bg-black text-white hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500'>Sign In</button>
                        <button className='w-[575px] h-[60px] mt-4 rounded-xl border border-blue-500 text-blue-500 hover:bg-black hover:text-white hover:border-none'>Register Now</button>
                    </div>
                    <div className='w-full flex justify-end mt-4'>
                        <a className=' text-blue-500' href="">Forget Password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
