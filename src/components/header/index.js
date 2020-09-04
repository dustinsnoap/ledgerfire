import React from 'react'
import Public from './public'
import Private from './private'
import {isLoggedIn} from '../../utilities/register'

export default () => isLoggedIn() ? <Private /> : <Public />