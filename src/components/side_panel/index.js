//imports
import React from 'react'
import {Link} from 'react-router-dom'
//components
import Logo from '../logo'
//style
import Style from './style'

export default ({page}) =>
    <Style className='side-panel'>
        <Logo />
        <Link to="#" className='link'>Home</Link>
        <Link to="#" className='link'>Breakeven</Link>
        <Link to="#" className='link'>Income Statement</Link>
        <Link to="#" className='link'>Balance Sheet</Link>
    </Style>