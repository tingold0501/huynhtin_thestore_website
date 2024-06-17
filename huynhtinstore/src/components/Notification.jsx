import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Notification = ({ message, type }) => {
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
    return (
        <div>
            <ToastContainer />
            {toast[type](message)}
        </div>
    );
}

export default Notification;
