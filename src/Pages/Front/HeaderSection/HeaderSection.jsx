import React, { useState } from 'react'

import './HeaderSection.css'

export default function HeaderSection() {
    const [navClass, setNavClass] = useState('navBar')

    window.onscroll = () => {
        if (window.scrollY >= 200) {
            setNavClass('navBar-scrolled')
        } else {
            setNavClass('navBar')
        }
    }
    window.onload = () => {
        const navToggle = document.querySelector('.navToggle input')
        const nav = document.querySelector('nav ul')
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('slide')
        })
    }
    return (
        <>
            <nav id="front-nav" className={navClass}>
                <div className="logo">Logo</div>
                <ul className="menu">
                    <li className="menu-item"><a href="#">Home</a></li>
                    <li className="menu-item"><a href="#about">About Us</a></li>
                    <li className="menu-item"><a href="#package">Package</a></li>
                    <li className="menu-item"><a href="#tracking">Track</a></li>
                    <li className="menu-item"><a href="#contact">Contact</a></li>
                </ul>
                <div className="navToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            <section id="header">
                <div className="heading">
                    <span>Lorem ipsum dolor sit amet.</span>
                    <h1>A Better Place to do Your Laundry</h1>
                    <a href="#contact" className="button">Lihat Lokasi</a>
                </div>
            </section>
        </>
    )
}
