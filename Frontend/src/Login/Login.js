import React from 'react';

import {Link} from 'react-router-dom';

import './Login.css';

export default function Login(){

    return(
        <div className='login-container'>
        <h1>LOGIN</h1>
        <form className='login-form'>
            <label>Username : </label><input type='text' placeholder='username' name='username'></input>
            <br></br>
            <label>Password &nbsp;: </label><input type='password' placeholder='password' name='password'></input>

        </form>
        <div className='reg-button-div'>
        <h3>Not a user? Register</h3>
        <Link className='login-reg-link' to="/">REGISTER</Link>
        </div>
        </div>

    );

} 