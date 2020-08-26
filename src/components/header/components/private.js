//imports
import React from 'react'
//style
import Style from '../style/private'
//assets
import bell from '../../../assets/bell-icon.png'
import avatar from '../../../assets/fonz.jpg'

export default () => 
    <Style className='header private'>
        <img src={bell} className='notifications' alt='notifications' />
        <div className='user'>
            <span className='username'>Matsuo Group</span>
            <figure className='dropdown'></figure>
        </div>
        <img className='avatar' src={avatar} alt='avatar'/>
    </Style>