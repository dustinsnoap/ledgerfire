//imports
import React from 'react'
//components
import Header from '../../components/header'
import Login from '../../components/register/login'
//style
import Styled from './style'
//assets
import Banner from '../../assets/placeholder-2.png'
// import Banner from '../../assets/placeholder.jpg'

export default () =>
    <Styled className='page'>
        <Header secure={false} />
        <div className='content'>
            <img className='banner' src={Banner} alt='banner'/>
            <Login />
        </div>
    </Styled>