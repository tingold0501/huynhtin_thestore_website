import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
const Googlelogin = () => {

    return (
        <div>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    localStorage.setItem('token', credentialResponse.credential);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </div>
    );
}

export default Googlelogin;
