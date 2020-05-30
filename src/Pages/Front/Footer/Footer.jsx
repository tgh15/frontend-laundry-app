import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'
export default function Footer() {
    return (
        <footer id="footer">
            <div className="credits">
                <p className="text-center">© 2020 Muh Teguh Adhi Putra | muhteguhadhiputra15@gmail.com</p>
            </div>
            <div className="logo">Logo</div>
            <Link to="/admin" >Admin Panel </Link>
        </footer>
    )
}