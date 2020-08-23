import React from 'react'

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
            <button className='login'><span>Log In</span></button>
        </div>
    </div>