import React from 'react'
import { NavLink, Link } from 'react-router-dom'


export default function Sidebar() {

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link to="/admin" className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>

            <hr className="sidebar-divider my-0"></hr>
            <li className="nav-item">
                <NavLink to="/admin" exact={true} className="nav-link" activeclassname="active">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </NavLink>
            </li>

            <hr className="sidebar-divider d-none d-md-block"></hr>
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Transaksi</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <NavLink to="/admin/transaksi/tambah" className="collapse-item" activeclassname="active">Tambah Transaksi</NavLink>
                        <NavLink to="/admin/transaksi" exact={true} className="collapse-item" activeclassname="active">Semua Transaksi</NavLink>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <NavLink to="/admin/paket" className="nav-link" activeclassname="active">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Paket</span>
                </NavLink>
            </li>

            <hr className="sidebar-divider d-none d-md-block"></hr>
            <li className="nav-item">
                <NavLink to="/admin/laporan" className="nav-link" activeclassname="active">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Laporan</span>
                </NavLink>
            </li>
            <hr className="sidebar-divider d-none d-md-block"></hr>
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    )
}