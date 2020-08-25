//imports
import React from 'react'
import {Link, withRouter} from 'react-router-dom'
//components
import Logo from '../logo'
//style
import Style from './style'

export default withRouter(({match}) =>
    <Style className='side-panel'>
        <Logo />
        <Link to="#" className={`link${match.url === '/home' ? ' active': ''}`}>Home</Link>
        <Link to="#" className={`link${match.url === '/breakeven' ? ' active': ''}`}>Breakeven</Link>
        <Link to="#" className={`link${match.url === '/incomestatement' ? ' active': ''}`}>Income Statement</Link>
        <Link to="#" className={`link${match.url === '/balancesheet' ? ' active': ''}`}>Balance Sheet</Link>
    </Style>
)