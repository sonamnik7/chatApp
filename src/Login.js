import { Button } from "@mui/material";
import React from "react";
import './Login.css'; 
import {auth, provider} from './firebase';
function Login(){
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    return(
        <div className="login">
            <div className="login__logo">
                <img src="https://images.pexels.com/photos/1111372/pexels-photo-1111372.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
} 
export default Login;