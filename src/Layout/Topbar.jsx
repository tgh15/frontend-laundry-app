import React from 'react'
import { AuthContext } from '../Context/AuthContext';

export default function Topbar() {
    const { logout } = React.useContext(AuthContext)
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>
            <div className="navbar-nav ml-auto">
                <button onClick={logout} className="btn btn-danger nav-item btn-sm">Keluar</button></div>
        </nav>
    )
}
