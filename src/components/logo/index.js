//imports
import React from 'react'
import {Link} from 'react-router-dom'
//assets
import Logo from '../../assets/logo-green.png'
//utilties
import {isLoggedIn} from '../../utilities/register'
//style
import Style from './style'

export default () =>
    <Style className={`logo ${isLoggedIn() ? 'private' : 'public'}`}>
        <Link to='/home'>
            <img src={Logo} alt='logo'/>
            <span>LedgerFire</span>
        </Link>
    </Style>
    