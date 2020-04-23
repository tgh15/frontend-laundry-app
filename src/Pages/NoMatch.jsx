import React from 'react'
import { useLocation } from 'react-router-dom'
import './NoMatch.css'

export default function NoMatch() {
    let location = useLocation()
    return (
        <div className="noMatch">
            <h2>404 | Not Found</h2>
            <code>{location.pathname}</code>
        </div>
    )
}
