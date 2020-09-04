//imports
import React from 'react'
import {Link} from 'react-router-dom'
//utilities
import {login} from '../../utilities/register'

export default () =>
    <div className='login'>
        <div className='input email'>
            <label className='label' htmlFor='email-input'>Email</label>
            <input className='input-box' type='email' id='email-input'></input>
        </div>
        <div className='input password'>
            <label className='label' htmlFor='password-input'>Password</label>
            <input className='input-box' type='password' id='password-input'></input>
        </div>
        <div className='buttons'>
            <button className='signup'><span>Sign Up</span></button>
            <button className='forgot-password'><span>Forgot Password</span></button>
            <Link to='/dashboard' className='login' onClick={login}><span>Log In</span></Link>
        </div>
    </div>