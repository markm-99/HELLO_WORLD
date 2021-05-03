import React, { useState } from 'react';
import './GoogleSSO.css';
import { signInWithGoogle } from "../../services/firebase";
import {userContext} from '../../userContext';
//Extra sign-in page in case the user needs to sign in from anywhere else in the app (can just link to this)

const GoogleSSO = ({}) => {

    // const getStarted = () => {
    
    // };

    return (
        <div className="GoogleSSO">


            <div className="line">
                <h2>Sign in to manage your kards and view your social analytics!</h2>
            </div>




            <div className="sign">
                <p>---------------------Sign in with ---------------------</p>
                <button type="button"><img src="google.jpeg" alt="google" width="40" height="20" onClick={signInWithGoogle}/></button>
            </div>
        </div>
    );
};

export default GoogleSSO;