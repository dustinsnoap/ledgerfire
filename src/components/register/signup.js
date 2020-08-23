import React from 'react'

export default () =>
    <div className='login'>
        <div className='email'>
            <label className='label' for='email-input'></label>
            <input className='input' type='input' id='email-input'></input>
        </div>
        <div className='password'>
            <label className='label' for='password-input'></label>
            <input className='input' type='password' id='password-input'></input>
        </div>
        <div className='buttons'>
            <button className='login'>Log In</button>
            <button className='signup'>Sign Up</button>
        </div>
    </div>