import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// PrivateRoute checks localStorage for a token, and renders a Component if a token exists. 
// If there is no token, it redirects our user to the login page at "/" 

const PrivateRoute = ({ component: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={() => {
                return localStorage.getItem('token') ? <Component /> : <Redirect to="/" />
                }}
            />
    )
}

export default PrivateRoute