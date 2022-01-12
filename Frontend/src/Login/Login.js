import React from 'react';

import {Link} from 'react-router-dom';

import './Login.css';

export default function Login(){

    return(
        <>
        <h1>THIS IS LOGIN PAGE</h1>
        <form className='login-form'>
            <input type='text' placeholder='username' name='username'></input>
            <input type='password' placeholder='password' name='password'></input>

        </form>
        
        <Link className='login-reg-link' to="/"> GO TO REGISTER PAGE  </Link>
        </>

    );

} 