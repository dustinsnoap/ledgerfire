import React from 'react'
import {Link, withRouter} from 'react-router-dom'
//data
import sidepanel from '../../../data/user'
//utilities
import {logout} from '../../../utilities/register'
//style
import Style from './style'

let submenu = false
const sidebar = sidepanel.sidebar

export default withRouter(({match}) =>
    <Style className='side-panel'>
        {console.log('sidepanel', sidebar)}
        {/* <input id='test' type='checkbox'/>
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
        </label> */}
        {sidebar.map((item, idx) =>
            <div className={`category ${item.title}`} key={idx}>
                <input id={item.title} type='checkbox'/>
                <label className='item'>
                    <div className='description'>
                        <figure></figure>
                        <span>{item.title}</span>
                    </div>
                    <div className='submenu'>
                    {item.children.map((subitem, idx) =>
                        <div className={`subitem ${subitem.title}`} key={idx}>
                            <figure></figure>
                            <span className='title'>{subitem.title}</span>
                        </div>
                    )}
                    </div>
                    
                </label>
            </div>
        )}
        <div className='menu'>
            <Link to="#" onClick={logout} className={`link${match.url === '/balancesheet' ? ' active': ''}`}>
                <figure></figure>
                <span>Logout</span>
            </Link>
        </div>
    </Style>
)