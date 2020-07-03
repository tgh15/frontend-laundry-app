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
                <div className="logo">
                    <img src="https://1.bp.blogspot.com/-pIDp92mBQ_I/Xv9Qi1klZ9I/AAAAAAAACdA/LjQEW8smvyoKL-EA4CznV1BSpL_Z17UyACLcBGAsYHQ/s640/Logo.png" alt="Logo" />
                </div>
                <ul className="menu">
                    <li className="menu-item"><a href="#">Home</a></li>
                    <li className="menu-item"><a href="#about">Tentang Kami</a></li>
                    <li className="menu-item"><a href="#package">Paket</a></li>
                    <li className="menu-item"><a href="#tracking">Lacak</a></li>
                    <li className="menu-item"><a href="#contact">Kontak</a></li>
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
