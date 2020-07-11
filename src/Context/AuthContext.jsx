import React, { Component } from 'react';
import axios from 'axios'
import Swal from "sweetalert2"

const axiosReq = axios.create()
axiosReq.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

export const AuthContext = React.createContext()

export default class AuthContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            user: localStorage.getItem('user') || {},
            token: localStorage.getItem("token") || "",
            isLoggedIn: (localStorage.getItem('token') === null) ? false : true
        }
    }

    login = (credential) => {
        return axiosReq.post('https://teguh-backend.herokuapp.com/api/v1/login', credential)
            .then(response => {
                const token = response.data.data.token
                // console.log(response.data.data.user.name)
                localStorage.setItem('token', token)
                this.setState({ user: response.data.data.user })
                this.setState({
                    token,
                    isLoggedIn: true
                })
                Toast.fire({
                    icon: 'success',
                    title: 'Login Berhasil'
                })
            })
            .catch(function (err) {
                Toast.fire({
                    icon: 'error',
                    title: 'Login Gagal'
                })
            })
    }

    logout = () => {
        localStorage.removeItem('token')
        this.setState({
            isLoggedIn: false
        })
    }
    render() {
        return (
            <AuthContext.Provider value={{ login: this.login, logout: this.logout, ...this.state }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export const withAuth = (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                <AuthContext.Consumer>
                    {(context) => (
                        <WrappedComponent {...this.props} {...context} />
                    )}
                </AuthContext.Consumer>
            )
        }
    }
}