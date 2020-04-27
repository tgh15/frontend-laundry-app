import React, { Component } from 'react'
import './Admin.css'
import SideMenu from './SideMenu';

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
                        <button onClick={this.openNav}>
                            <svg width="30" height="30">
                                <path d="M0,5 30,5" stroke="#fff" strokeWidth="5" />
                                <path d="M0,14 30,14" stroke="#fff" strokeWidth="5" />
                                <path d="M0,23 30,23" stroke="#fff" strokeWidth="5" />
                            </svg>
                        </button>
                    </span>
                    <div className="my-navbar-brand">
                        Admin
                </div>
                </nav>
                <SideMenu />
                <div id="main">
                    {this.props.children}
                </div>
            </>
        )
    }
}
