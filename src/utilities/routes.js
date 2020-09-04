//imports
import React from 'react'
import {Route, Redirect} from 'react-router-dom'
//utilities
import {isLoggedIn} from './register'

export const Public = ({component: Component, ...rest}) =>
<Route {...rest} render={props =>
    !isLoggedIn() ?  <Component {...props} /> : <Redirect to='/dashboard'/>
} />

export const Private = ({component: Component, ...rest}) =>
<Route {...rest} render={props =>
    isLoggedIn() ? <Component {...props} /> : <Redirect to='/login'/>
} />