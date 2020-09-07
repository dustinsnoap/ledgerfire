import React from 'react'
import {Link, withRouter} from 'react-router-dom'
//utilities
import {logout} from '../../../utilities/register'
//style
import Style from './style'

export default withRouter(({match}) =>
    <Style className='side-panel'>
        {console.log(match)}
        <Link to="/dashboard" className={`link${match.url === '/dashboard' ? ' active': ''}`}>
            <figure></figure>
            <span>Home</span>
        </Link>
        <Link to="/breakeven" className={`link${match.url === '/breakeven' ? ' active': ''}`}>
            <figure></figure>
            <span>Breakeven</span>
        </Link>
        <Link to="/expenses" className={`link${match.url === '/expenses' ? ' active': ''}`}>
            <figure></figure>
            <span>Expenses</span>
        </Link>
        <Link to="#" onClick={logout} className={`link${match.url === '/balancesheet' ? ' active': ''}`}>
            <figure></figure>
            <span>Breakeven</span>
        </Link>
    </Style>
)