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

const url = 'https://teguh-backend.herokuapp.com/api/v1/laporan'

export const LaporanContext = createContext()

const LaporanContextProvider = (props) => {

    const [isLoading, setIsLoading] = useState(false)
    const [dataLaporan, setDataLaporan] = useState([])

    const getLaporan = (date) => {
        let ISODateStart = date.start.toISOString().split("T")[0]
        let ISODateEnd = date.end.toISOString().split("T")[0]

        let start = ISODateStart + ' ' + '00:00:00'
        let end = ISODateEnd + ' ' + '23:59:59'
        let tanggal = { start, end }
        // console.log(tanggal)
        setIsLoading(true)
        setDataLaporan([])
        return axiosReq.post(url, tanggal)
            .then(response => {
                let result = response.data.data
                if (result.length == 0) {

                    setIsLoading(false)
                    return Toast.fire({
                        icon: 'error',
                        title: 'Data tidak ditemukan'
                    })
                }
                Toast.fire({
                    icon: 'success',
                    title: 'Data ditemukan'
                })
                console.log(result)
                setDataLaporan(result)
                setIsLoading(false)
            })
    }


    return (
        <LaporanContext.Provider value={{ getLaporan, isLoading, dataLaporan }}>
            {props.children}
        </LaporanContext.Provider>
    )
}

export default LaporanContextProvider