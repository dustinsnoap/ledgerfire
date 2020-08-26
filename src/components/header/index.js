//imports
import React from 'react'
//components
import Public from './components/public'
import Private from './components/private'

export default ({secure}) => 
    secure ? <Private /> : <Public />