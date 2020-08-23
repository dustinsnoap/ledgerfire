//imports
import React from 'react'
import {Link} from 'react-router-dom'
//assets
import Logo from '../../assets/logo-green.png'

export default () =>
    <Link className='logo' to='/home'>
        <img src={Logo} alt='logo'/>
        <span>LedgerFire</span>
    </Link>