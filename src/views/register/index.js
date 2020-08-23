//imports
import React from 'react'
//components
import Login from '../../components/register/login'
//style
import Styled from './style'
//assets
import Banner from '../../assets/placeholder-2.png'
// import Banner from '../../assets/placeholder.jpg'

export default () =>
    <Styled className='page login'>
        <div className='content'>
            <img className='banner' src={Banner} />
            <Login />
        </div>
    </Styled>