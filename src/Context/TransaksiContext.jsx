import React, { createContext, useState } from 'react'
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
    const [searchKey, setSearchKey] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [queryFrontResult, setQueryFrontResult] = useState([])

    // useEffect(() => {
    //     getTransaksi()
    // }, [])

    const getTransaksi = () => {
        return axiosReq.get(url)
            .then(response => {
                let result = response.data.data
                setTransaksi(result)
                // console.log(result)
            })
    }

    const addTransaksi = (data) => {
        return axiosReq.post(url, data)
            .then(response => {
                // console.log(response.data.data)
                var result = response.data.data
                setTransaksi([...transaksi, result])
                Toast.fire({
                    icon: 'success',
                    title: 'Transaksi Berhasil'
                })
            })
            .catch(err => console.error(err.data))
    }

    const searchTransaksi = (data) => {
        var lowercasedFilter = data.toLowerCase()
        setSearchKey(lowercasedFilter)
    }
    const searchResult = transaksi.filter(item => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(searchKey))
    })

    const frontQuery = (query) => {
        return axiosReq.get(url + "/" + query)
            .then(response => {
                let result = response.data.data
                setIsLoading(false)
                setQueryFrontResult([result])
                console.log(result)
            }).catch(err => {
                setIsLoading(false)
                setQueryFrontResult([{ message: 'data tidak ditemukan' }])
            })

    }

    return (
        <TransaksiContext.Provider
            value={{
                queryFrontResult,
                setQueryFrontResult,
                isLoading,
                setIsLoading,
                getTransaksi,
                addTransaksi,
                searchTransaksi,
                searchResult,
                frontQuery
            }}>
            {props.children}
        </TransaksiContext.Provider>
    )
}

export default TransaksiContextProvider