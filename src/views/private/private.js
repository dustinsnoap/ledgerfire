//imports 
import React from 'react'
//components
import Logo from '../../components/logo'
import Header from '../../components/header/private'
import SidePanel from '../../components/side_panel/v3'
//style
import Style from './style'

export default ({component: Component, ...rest}) =>
    <Style className='page'>
        <Logo/>
        <Header/>
        <SidePanel />
        <Component {...rest} />
    </Style>