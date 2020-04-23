import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'

export default class Admin extends Component {
    openNav() {
        document.getElementById('side-menu').style.width = '250px';
        // document.getElementById('main').style.marginLeft = '250px';
        document.getElementById('my-nav').style.marginLeft = '250px';

    }
    closeNav() {
        document.getElementById('side-menu').style.width = '0px';
        document.getElementById('main').style.marginLeft = '0px';
        document.getElementById('my-nav').style.marginLeft = '0px';
    }
    render() {
        return (
            <>
                <nav id="my-nav" className="my-navbar fixed-top">
                    <span className="open-nav">
                        <a href="#" onClick={this.openNav}>
                            <svg width="30" height="30">
                                <path d="M0,5 30,5" stroke="#fff" strokeWidth="5" />
                                <path d="M0,14 30,14" stroke="#fff" strokeWidth="5" />
                                <path d="M0,23 30,23" stroke="#fff" strokeWidth="5" />
                            </svg>
                        </a>
                    </span>
                    <div className="my-navbar-brand">
                        Admin
                </div>
                </nav>
                <div id="side-menu" className="side-nav">
                    <a href="#" className="btn-close" onClick={this.closeNav}>&times;</a>
                    <Link to="/admin" className="link">Dashboard</Link>
                    <Link to="/admin/profile" className="link">Profile</Link>
                </div>
                <div id="main">
                    {this.props.children}
                </div>
            </>
        )
    }
}
