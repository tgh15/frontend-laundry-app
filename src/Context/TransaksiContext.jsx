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
    const [searchKey, setSearchKey] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [queryFrontResult, setQueryFrontResult] = useState([])

    useEffect(() => {
        const getTransaksi = async () => {
            return await axiosReq.get(url)
                .then(response => {
                    let result = response.data.data
                    setTransaksi(result)
                    // console.log(result)
                })
        }
        getTransaksi()

    }, [])



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
                window.location = '/admin'
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

    const transaksiHariIni = transaksi.filter(trx => {

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = String(today.getFullYear());

        today = yyyy + '-' + mm + '-' + dd

        return trx.tanggal_transaksi === today
    })

    return (
        <TransaksiContext.Provider
            value={{
                queryFrontResult,
                setQueryFrontResult,
                isLoading,
                setIsLoading,
                addTransaksi,
                searchTransaksi,
                searchResult,
                frontQuery,
                transaksi,
                transaksiHariIni
            }}>
            {props.children}
        </TransaksiContext.Provider>
    )
}

export default TransaksiContextProvider