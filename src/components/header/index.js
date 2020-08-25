//imports
import React from 'react'
//components
import Public from './components/public'
import Private from './components/public'

export default ({secure}) =>
    secure ? <Private /> : <Public />