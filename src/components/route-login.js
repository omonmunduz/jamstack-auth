import React from 'react';
import { useIdentityContext } from 'react-netlify-identity';
import { navigate } from 'gatsby';
import './route-login.css';
import {css} from '@emotion/core';

const RouteLogin = ({showModal}) => {

    const identity = useIdentityContext();
    if(identity && identity.isLoggedIn){
        navigate('/dashboard/secret', { replace: true });
    }
    return(
        <div className = "login">
            <span css = {css`
            font-size: 100px;
            color: blue;
            `}>&#x02591;</span>
            <h1 className = "login-text">Login or Signup</h1>
            <button onClick = {showModal} className = "loginBtn">Login</button>
        </div>
    )
};
export default RouteLogin;