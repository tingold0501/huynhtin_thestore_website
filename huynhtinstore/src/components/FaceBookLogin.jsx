import React, { useState } from 'react';
import { LoginSocialFacebook, } from 'reactjs-social-login';
import { FacebookLoginButton, } from 'react-social-login-buttons';
const FaceBookLogin = () => {
    const [profile, setProfile] = useState(null);
    if (!profile){
        window.location.replace('/');
    }
    return (
        <div>
            {!profile ?
                <LoginSocialFacebook
                    appId="7954767284575803"
                    onResolve={(response) => {
                        console.log(response);
                        setProfile(response.data);
                    }}
                    onReject={err => {
                        console.log(err);
                    }}
                >
                    <FacebookLoginButton />
                </LoginSocialFacebook>
                : ""}
            {profile ?
                <div>
                    <p>{profile.name}</p>
                    <img src={profile.picture.data.url} alt="" />
                </div>
                : ""}
        </div>
    );
}

export default FaceBookLogin;
