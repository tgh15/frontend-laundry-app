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

const url = 'https://teguh-backend.herokuapp.com/api/v1/kategori'

export const KategoriContext = createContext()

const KategoriContextProvider = (props) => {
    const [kategori, setKategori] = useState([])

    useEffect(() => {
        const getKategori = async () => {
            const result = await axiosReq.get(url)
            const resultData = result.data.data
            setKategori(...kategori, resultData)
        }
        getKategori()
    }, [])

    const tambahKategori = () => {

    }
    const hapusKategori = () => {

    }
    const editKategori = () => {

    }

    return (
        <KategoriContext.Provider value={{ kategori, tambahKategori, hapusKategori, editKategori }}>
            {props.children}
        </KategoriContext.Provider>
    )
}

export default KategoriContextProvider