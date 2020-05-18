import React, { createContext, useState, useEffect } from 'react'
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

const url = 'https://teguh-backend.herokuapp.com/api/v1/transaksi'

export const TransaksiContext = createContext()

const TransaksiContextProvider = (props) => {
    const [transaksi, setTransaksi] = useState([])

    useEffect(() => {
        getTransaksi()
    }, [])

    const getTransaksi = () => {
        return axiosReq.get(url)
            .then(response => {
                let result = response.data.data
                setTransaksi(result)
                // console.log(result)
            })
    }

    return (
        <TransaksiContext.Provider value={{ transaksi }}>
            {props.children}
        </TransaksiContext.Provider>
    )
}

export default TransaksiContextProvider