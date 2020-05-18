import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';

export default function SideMenu() {
    const closeNav = () => {
        document.getElementById('side-menu').style.width = '0px';
        document.getElementById('main').style.marginLeft = '0px';
        document.getElementById('my-nav').style.marginLeft = '0px';
    }
    const { logout } = React.useContext(AuthContext)
    return (
        <div id="side-menu" className="side-nav">
            <button className="btn-close" onClick={closeNav}>&times;</button>
            <Link to="/admin" className="link">Dashboard</Link>
            <Link to="/admin/profile" className="link">Profile</Link>
            <Link to="/admin/transaksi" className="link">Transaksi</Link>
            <Link to="/admin/transaksi/tambah" className="link">Tambah Transaksi</Link>
            <Link to="/admin/paket" className="link">Paket</Link>
            <button onClick={logout} className="link">Keluar</button>
        </div>
    )
}
