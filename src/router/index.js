//imports
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
//components
import Header from '../views/header'
//pages
import Register from '../views/register'
import Marketing from '../components/marketing'
import Home from '../views/home'
import BreakEven from '../components/break_even'
import IncomeStatement from '../components/icnome_statement'


export default () => 
    <Router>
        <Header />
        <Route exact path='/' component={Marketing} />
        <Route exact path='/login' component={Register} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/breakeven' component={BreakEven} />
        <Route exact path='/incomestatement' component={IncomeStatement} />
    </Router>