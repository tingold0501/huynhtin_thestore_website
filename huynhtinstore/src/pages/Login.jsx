import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BannerLogin from '../assets/images/bannerLogin.png';
import LoginGoogle from '../components/LoginGoogle';
import { GoogleLogin } from '@react-oauth/google';
const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
    const handleSubmit = (e) => {
        if (email === "" || password === "") {
            toast.error('🦄 Bạn Chưa Nhập Email Hoặc Mật Khẩu!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                zIndex: 999999
            });
        }
        else {
            alert("Login successfully" + email + password);
        }
    }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-2/3 flex items-center justify-between'>
                <div>
                    <img src={BannerLogin} alt="" />
                </div>
                <div>
                    <p className='text-[#484848] text-[66px]'>GT-Store</p>
                    <p className='text-[#000000] text-[30px]'>Sign In To GT-Store</p>
                    <div className='w-full grid grid-cols-2'>
                        <LoginGoogle />
                    </div>
                    <p>or</p>
                    <input type="email" />
                    <input type="password" />
                    <button>Sign In</button>
                    <button>Register Now</button>
                    <a href="">Forget Password</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
