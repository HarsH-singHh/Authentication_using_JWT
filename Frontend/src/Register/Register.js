import React from 'react';

import {Link} from 'react-router-dom';

import './Register.css';

export default function Register(){

    return(
        <div className='reg-container'>
        <h1 className='nav'>REGISTER HERE</h1>
        <form className='reg-form'>
            
            <div className='full-name'>
                <label className='name-label'>Name : </label>
                <input className='first-name' placeholder='First Name'>
                </input><input className='last-name' placeholder='Last Name'></input>
            </div>

            <label className='username-label'>Username : </label><input className='username-input' type='text' placeholder='username' name='username'></input>
            <br></br>
            <label className='pass-label'>Password &nbsp;: </label><input className='password-input' type='password' placeholder='password' name='password'></input>

        </form>
        <div className='login-button-div'>
            <h3>Already a user? Login</h3>
            <Link className='reg-login-link' to="/login">LOGIN</Link>
        </div>
        </div>

    );

} 