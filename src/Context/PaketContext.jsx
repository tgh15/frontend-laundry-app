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

const url = 'https://teguh-backend.herokuapp.com/api/v1/paket'

export const PaketContext = createContext()

const PaketContextProvider = (props) => {
    const [paket, setPaket] = useState([])

    useEffect(() => {
        const getPaket = async () => {
            const result = await axiosReq.get(url)

            const resultData = result.data.data
            console.log(resultData)
            setPaket(...paket, resultData)
        }
        getPaket()
    }, [])

    const tambahPaket = (props) => {
        return axiosReq.post(url, props)
            .then(response => {
                const resultData = response.data.paket
                console.log(resultData)
                setPaket([...paket, resultData])
                Toast.fire({
                    icon: 'success',
                    title: 'Berhasil ditambahkan'
                })
            })
            .catch(err => (
                Toast.fire({
                    icon: 'error',
                    title: 'Gagal ditambahkan'
                })
            ))
    }

    const hapusPaket = (props) => {
        return Swal.fire({
            title: 'Hapus Data?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Hapus!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.value) {
                axiosReq.delete(url + "/" + props)
                    .then(response => {
                        setPaket([...paket.filter(p => p.id !== props)])
                        Toast.fire({
                            icon: 'success',
                            title: 'Berhasil dihapus'
                        })
                    })
                    .catch(err => {
                        Toast.fire({
                            icon: 'error',
                            title: 'Gagal dihapus'
                        })
                    })
            }
        })
    }

    return (
        <PaketContext.Provider value={{ paket, tambahPaket, hapusPaket }}>
            {props.children}
        </PaketContext.Provider>
    )
}

export default PaketContextProvider