import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
const LoginGoogle = () => {
    return (
        <div>
            <GoogleLogin
            width={280}
            size='large'
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </div>
    );
}

export default LoginGoogle;
