//imports
import React from 'react'
//components
import Login from '../../components/register/login'
//style
import Styled from './style'
//assets
import Banner from '../../assets/placeholder-2.png'

export default () =>
    <Styled className='marketing'>
        <div className='content'>
            <img className='banner' src={Banner} alt='banner'/>
            <Login />
        </div>
    </Styled>