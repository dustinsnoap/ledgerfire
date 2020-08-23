//imports
import React from 'react'
import {Link} from 'react-router-dom'
//assets
import Logo from '../../assets/logo-green.png'
//style
import Style from './style'

export default () =>
    <Style className='header'>
        <Link className='logo' to='/home'>
            <img src={Logo} alt='logo'/>
            <span>LedgerFire</span>
        </Link>
        <div className='links'>
            <Link className='link'>Link 1</Link>
            <Link className='link'>Link 2</Link>
            <Link className='link'>Link 3</Link>
        </div>
    </Style>