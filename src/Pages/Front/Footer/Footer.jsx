import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'
export default function Footer() {
    return (
        <footer id="footer">

            <div className="logo">
                <img src="https://1.bp.blogspot.com/-pIDp92mBQ_I/Xv9Qi1klZ9I/AAAAAAAACdA/LjQEW8smvyoKL-EA4CznV1BSpL_Z17UyACLcBGAsYHQ/s640/Logo.png" alt="Logo" />
            </div>
            <div className="credits text-center">
                <Link to="/admin" >Admin Panel </Link>
                <p >Copyright © 2020 Berkah Laundry  </p>
            </div>
        </footer>
    )
}