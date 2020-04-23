import React from 'react'

//CSS
import './Login.css'

export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="login-page">
            <div className="login-box">
                <h3>Selamat Datang</h3>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email Anda" />
                    <input type="password" placeholder="Password Anda" />
                    <input type="submit" value="Masuk" />
                </form>
                <a href="#">Lupa Password?</a>
            </div>
        </div>
    )
}
