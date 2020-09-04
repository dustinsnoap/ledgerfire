//imports
import React from 'react'
import {Link, withRouter} from 'react-router-dom'
//utilities
import {logout} from '../../../utilities/register'
//style
import Style from './style'

export default withRouter(({match}) =>
    <Style className='side-panel'>
        <Link to="#" className={`link${match.url === '/home' ? ' active': ''}`}>Dashboard</Link>
        <Link to="#" className={`link${match.url === '/breakeven' ? ' active': ''}`}>Breakeven</Link>
        <Link to="#" className={`link${match.url === '/incomestatement' ? ' active': ''}`}>Income Statement</Link>
        <Link to="#" onClick={logout} className={`link${match.url === '/balancesheet' ? ' active': ''}`}>Balance Sheet</Link>
    </Style>
)