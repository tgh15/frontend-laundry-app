import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { withAuth } from './Context/AuthContext'

function ProtectedRoute(props) {
    const { component: Component, ...rest } = props
    return (
        props.isLoggedIn ? <Route {...rest} component={Component} /> : <Redirect push to='/login' />
    )
}

export default withAuth(ProtectedRoute)