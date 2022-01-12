import React from 'react';

import {Link} from 'react-router-dom';

import './Register.css';

export default function Register(){

    return(
        <>
        <form className='reg-form'>
            <input type='text' placeholder='username' name='username'></input>
            <input type='password' placeholder='password' name='password'></input>

        </form>
        
        <Link className='reg-login-link' to="/login"> GO TO LOGIN PAGE </Link>
        </>

    );

} 