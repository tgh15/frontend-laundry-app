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
            setPaket(...paket, resultData)
        }
        getPaket()
    }, []) // eslint-disable-next-line

    const tambahPaket = (props) => {
        if (props === undefined || (props.paket === "" || props.harga === "" || props.kategori === "")) {
            return Toast.fire({
                icon: 'warning',
                title: 'input tidak boleh kosong'
            })
        }
        return axiosReq.post(url, props)
            .then(response => {
                const resultData = response.data.data
                setPaket([...paket, resultData])
                Toast.fire({
                    icon: 'success',
                    title: 'Berhasil ditambahkan'
                })
            })
            .catch(err => (
                // Toast.fire({
                //     icon: 'error',
                //     title: 'Gagal ditambahkan'
                // })
                console.log(err)
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

    const editPaket = (id, data) => {
        return axiosReq.put(url + "/" + id, data)
            .then(response => {
                const edited = response.data.data
                let paketListCopy = paket.map(el => {
                    if (el.id === id) {
                        el.paket = edited.paket
                        el.harga = edited.harga
                        el.kategori = edited.kategori
                    }
                    return el
                })
                setPaket(paket => paket = paketListCopy)
                Toast.fire({
                    icon: 'success',
                    title: 'Berhasil diupdate'
                })
            })
            .catch(err => {
                Toast.fire({
                    icon: 'error',
                    title: 'Gagal diupdate'
                })
            })
    }

    return (
        <PaketContext.Provider value={{ paket, tambahPaket, hapusPaket, editPaket }}>
            {props.children}
        </PaketContext.Provider>
    )
}

export default PaketContextProvider