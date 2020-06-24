import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default class Admin extends Component {
    render() {
        window.onload = () => {
            let toggleElements = []
            let toggleTopButton = document.getElementById('sidebarToggleTop')
            let toggleButton = document.getElementById('sidebarToggle')
            toggleElements.push(toggleButton, toggleTopButton)

            let sidebar = document.querySelector(".sidebar")
            toggleElements.map(element => {
                element.addEventListener('click', () => {
                    document.body.classList.toggle("sidebar-toggled")
                    sidebar.classList.toggle("toggled")
                    if (sidebar.classList.contains("toggled")) {
                        console.log("ok")
                    }
                })
            });
        }
        return (
            <div id="wrapper">
                <Sidebar />

                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <div className="container-fluid">

                            {this.props.children}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
