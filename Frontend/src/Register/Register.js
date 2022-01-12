import React from 'react';

import {Link} from 'react-router-dom';

import './Register.css';

export default function Register(){

    return(
        <>
        <h1>THIS IS REGISTER PAGE</h1>
        <form className='reg-form'>
            
            <div className='full-name'>
                <input className='first-name' placeholder='First Name'></input><input className='last-name' placeholder='Last Name'></input>
            </div>
            <input type='text' placeholder='username' name='username'></input>
            <input type='password' placeholder='password' name='password'></input>

        </form>
        
        <Link className='reg-login-link' to="/login"> GO TO LOGIN PAGE </Link>
        </>

    );

} 