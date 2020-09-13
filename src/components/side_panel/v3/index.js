import React from 'react'
import {Link, withRouter} from 'react-router-dom'
//utilities
import {logout} from '../../../utilities/register'
//style
import Style from './style'

let submenu = false

export default withRouter(({match}) =>
    <Style className='side-panel'>
        {console.log('submenu', submenu)}
        <input id='test' type='checkbox'/>
        <label htmlFor='test' className='menu'>
            <div to="/dashboard" onClick={() => submenu = true} className={`link${match.url === '/dashboard' ? ' active': ''}`}>
                <figure></figure>
                <span>Home</span>
            </div>
            <div className={`sub-menu${submenu ? ' active' : ''}`}>
                <Link to='/income/breakeven' className={`item${match.url === '/income/breakeven' ? ' active': ''}`}>
                    <figure></figure>
                    <span className='title'>Breakeven</span>
                </Link>
                <Link to='/income/breakeven' className={`active item${match.url === '/income/breakeven' ? ' active': ''}`}>
                    <figure></figure>
                    <span className='title'>Breakeven</span>
                </Link>
                <Link to='/income/breakeven' className={`item${match.url === '/income/breakeven' ? ' active': ''}`}>
                    <figure></figure>
                    <span className='title'>Breakeven</span>
                </Link>
                <Link to='/income/breakeven' className={`item${match.url === '/income/breakeven' ? ' active': ''}`}>
                    <figure></figure>
                    <span className='title'>Breakeven</span>
                </Link>
            </div>
        </label>
        <input id='test2' type='checkbox'/>
        <label htmlFor='test2' className='menu'>
            <div to="/dashboard" onClick={() => submenu = true} className={`link${match.url === '/income' ? ' active': ''}`}>
                <figure></figure>
                <span>Income</span>
            </div>
            <div className={`sub-menu${submenu ? ' active' : ''}`}>
                <Link to='/income/breakeven' className={`item${match.url === '/income/breakeven' ? ' active': ''}`}>
                    <figure></figure>
                    <span className='title'>Breakeven</span>
                </Link>
                <Link to='/income/breakeven' className={`item${match.url === '/income/breakeven' ? ' active': ''}`}>
                    <figure></figure>
                    <span className='title'>Breakeven</span>
                </Link>
                <Link to='/income/breakeven' className={`item${match.url === '/income/breakeven' ? ' active': ''}`}>
                    <figure></figure>
                    <span className='title'>Breakeven</span>
                </Link>
                <Link to='/income/breakeven' className={`item${match.url === '/income/breakeven' ? ' active': ''}`}>
                    <figure></figure>
                    <span className='title'>Breakeven</span>
                </Link>
            </div>
        </label>
        <input id='test3' type='checkbox'/>

        <label htmlFor='test3' className='menu'>
            <div to="/dashboard" onClick={() => submenu = true} className={`link${match.url === '/expenses' ? ' active': ''}`}>
                <figure></figure>
                <span>Expenses</span>
            </div>
            <div className={`sub-menu${submenu ? ' active' : ''}`}>
                <Link to='/income/breakeven' className={`item${match.url === '/income/breakeven' ? ' active': ''}`}>
                    <figure></figure>
                    <span className='title'>Breakeven</span>
                </Link>
                <Link to='/income/breakeven' className={`item${match.url === '/income/breakeven' ? ' active': ''}`}>
                    <figure></figure>
                    <span className='title'>Breakeven</span>
                </Link>
                <Link to='/income/breakeven' className={`item${match.url === '/income/breakeven' ? ' active': ''}`}>
                    <figure></figure>
                    <span className='title'>Breakeven</span>
                </Link>
                <Link to='/income/breakeven' className={`item${match.url === '/income/breakeven' ? ' active': ''}`}>
                    <figure></figure>
                    <span className='title'>Breakeven</span>
                </Link>
            </div>
        </label>
        <div className='menu'>
            <Link to="#" onClick={logout} className={`link${match.url === '/balancesheet' ? ' active': ''}`}>
                <figure></figure>
                <span>Logout</span>
            </Link>
        </div>
    </Style>
)