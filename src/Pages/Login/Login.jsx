import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'

//CSS
import './Login.css'
import { AuthContext } from '../../Context/AuthContext'

export default function Login() {

    const { login, isLoggedIn } = useContext(AuthContext)
    const [form, setForm] = useState({ email: '', password: '' })
    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        login(form)
    }

    if (isLoggedIn)
        return <Redirect push to="/admin" />

    return (
        <div className="login-page">
            <div className="login-box">
                <h3>Selamat Datang</h3>
                <form className="login-form" onSubmit={handleSubmit} onChange={handleChange}>
                    <input type="email" name="email" placeholder="Email Anda" />
                    <input type="password" name="password" placeholder="Password Anda" />
                    <input type="submit" value="Masuk" />
                </form>
                <a href="#">Lupa Password?</a>
            </div>
        </div>
    )
}
