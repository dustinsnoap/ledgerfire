//imports
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
//utilities
import {Public, Private} from '../utilities/routes'
//pages
import Register from '../views/register'
import Dashboard from '../components/dashboard'
// import Marketing from '../components/marketing'
import BreakEven from '../components/break_even'
import IncomeStatement from '../components/income_statement'
//components
import Logo from '../components/logo'
import Header from '../components/header'
import SidePanel from '../components/side_panel/v1'

export default () => 
    <Router>
        <Public component={Logo} />
        <Public component={Header} />
        <Public exact path='/login' component={Register} />

        <Private component={Logo} />
        <Private component={Header} />
        <Private component={SidePanel} />
        <Private exact path='/dashboard' component={Dashboard} />
        <Private exact path='/breakeven' component={BreakEven} />
        <Private exact path='/incomestatement' component={IncomeStatement} />

    </Router>