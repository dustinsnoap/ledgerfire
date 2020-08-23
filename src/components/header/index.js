//imports
import React from 'react'
import {Link} from 'react-router-dom'
//components
import Logo from '../logo'
//style
import Style from './style'

export default () =>
    <Style className='header'>
        <Logo />
        <div className='links'>
            <Link to='#' className='link'>Link 1</Link>
            <Link to='#' className='link'>Link 2</Link>
            <Link to='#' className='link'>Link 3</Link>
        </div>
    </Style>