import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
const Googlelogin = () => {
    const handleError = (response) => {
        console.log(response);
    }
    const handleSuccess = (response) => {
        const googleUser = jwtDecode(response.credential);
        const newData = {
            id : googleUser.iat,
            avatar : googleUser.picture,
            firstname : googleUser.given_name,
            lastName : googleUser.family_name,
            email : googleUser.email,
            password : googleUser.jti,
            isAdmin : false
          }
        localStorage.setItem('token', response.credential);
        localStorage.setItem('user', JSON.stringify(newData));
        window.location.replace('/');
    }
    return (
        <div>
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
            />
        </div>
    );
}

export default Googlelogin;
