//imports
import React from 'react'
//components
import SidePanel from '../../components/side_panel'
import Header from '../../components/header'
//style
import Style from './style'

export default () =>
    <Style className='page home'>
        <SidePanel page='home' />
        <Header secure={true} />
        Home
    </Style>