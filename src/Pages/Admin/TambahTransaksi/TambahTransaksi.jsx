import React, { useState, useContext } from 'react'
import Swal from "sweetalert2"

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import { PaketContext } from '../../../Context/PaketContext'
import IdentitasForm from './IdentitasForm'

export default function TambahTransaksi() {
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
    const { paket } = useContext(PaketContext)
    const [items, setItems] = useState([{
        index: Math.random(),
        kuantitas: '',
        paket: '',
        harga_paket: 0,
        harga: 0
    }])
    const [totalBayar, settotalBayar] = useState(0)
    const [identitas, setIdentitas] = useState(
        {
            kode_transaksi: Math.floor(Math.random() * 100) + Date.now(),
            nama_pelanggan: '',
            no_hp: '',
            alamat: '',
            status_transaksi: 0,
            harga_total: 0
        }
    )
    const addRow = () => {
        setItems((prevItems) => ([...prevItems,
        {
            index: Math.random(),
            kuantitas: '',
            paket: '',
            harga_paket: 0,
            harga: 0
        }
        ]))
    }
    const removeRow = (index) => {
        setItems(
            items.filter((item) => item.index !== index)
        )
    }
    const handleChange = (e) => {
        if (['nama_pelanggan', 'no_hp', 'alamat', 'status_transaksi'].includes(e.target.name)) {
            setIdentitas({ ...identitas, [e.target.name]: e.target.value })
        }
        if (e.target.name === 'paket') {
            var obj = JSON.parse(e.target.value)
            var paket = obj.paket
            var harga = obj.harga
            let itemss = [...items]
            itemss[e.target.dataset.id][e.target.name] = paket
            itemss[e.target.dataset.id]['harga_paket'] = harga
        }
        if (e.target.name === 'kuantitas') {
            let itemss = [...items]
            itemss[e.target.dataset.id][e.target.name] = e.target.value
        }
        if (['paket', 'kuantitas'].includes(e.target.name)) {
            var jumlah = items[e.target.dataset.id]['harga_paket'] * items[e.target.dataset.id]['kuantitas']
            console.log(jumlah)
            var test = JSON.parse(JSON.stringify(items))
            test[e.target.dataset.id].harga = jumlah
            setItems(test)
        }
        settotalBayar(items.reduce((total, item) => {
            return total + item.harga
        }, 0))
    }
    const hargaTotal = () => {
        return items.reduce((total, item) => {
            var harga_total = total + item.harga
            return harga_total
        }, 0)
        // settotalBayar(harga_total)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("ok!")
        if (identitas.nama_pelanggan === '' || identitas.no_hp === '' || identitas.alamat === '') {
            Toast.fire({
                icon: 'warning',
                title: 'Lengkapi form!'
            })
            return false
        }
        for (let i = 0; i < items.length; i++) {
            if (items[i].kuantitas === '' || items[i].paket === '') {
                Toast.fire({
                    icon: 'warning',
                    title: 'Lengkapi form!'
                })
                return false
            }
        }
        let data = Object.assign(identitas, { transaksilist: items, total_bayar: totalBayar })
        console.log(data)
    }

    return (
        <div className="container">
            <div className="card mb-3">
                <div className="card-body">
                    <h3>Tambah Transaksi</h3>
                </div>
            </div>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5>Tambah Transaksi</h5>
                        <button type="submit" className="btn btn-primary btn-sm">Selesai</button>
                    </div>
                    <div className="card-body">
                        <IdentitasForm change={handleChange} identitas={identitas} />
                        <hr />

                        <div className="table-responsive-md">
                            <table className="table table-md">
                                <thead>
                                    <tr>
                                        <th scope="col" width="5%" className="text-center">No</th>
                                        <th scope="col" width="30%" >Paket</th>
                                        <th scope="col" width="15%">Qty</th>
                                        <th scope="col" width="30%" className="text-center">Harga</th>
                                        <th className="text-center"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, idx) => {
                                        let paketId = `paket-${idx}`, qty = `qty-${idx}`
                                        return (
                                            <tr key={item.index}>
                                                <th>{idx + 1}</th>
                                                <td>
                                                    <select defaultValue={'0'} className="custom-select custom-select-sm" id={paketId} data-id={idx} name="paket" onChange={handleChange}>
                                                        <option disabled value="0">Paket</option>
                                                        {paket.length > 0 ? (
                                                            paket.map((el, key) => (
                                                                <option key={key} value={JSON.stringify(el)} data-harga={el.harga}>{el.paket}</option>
                                                            ))
                                                        ) :
                                                            (<option value="">Kosong</option>)
                                                        }
                                                    </select>
                                                </td>
                                                <td><input className="form-control form-control-sm" type="number" id={qty} data-id={idx} name="kuantitas" onChange={handleChange} /></td>
                                                <td>Rp. {item.harga}</td>
                                                <td>
                                                    {idx === 0 ?
                                                        (<button className="btn btn-primary btn-sm" type="button" onClick={() => { addRow() }}><FontAwesomeIcon icon={faPlusCircle} /></button>) :
                                                        (<button className="btn btn-danger btn-sm" type="button" onClick={() => removeRow(item.index)}><FontAwesomeIcon icon={faTimesCircle} /></button>)
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    <tr className="table-danger">
                                        <td colSpan="3"><strong>Total</strong></td>
                                        <td colSpan="2"> <strong>Rp. {hargaTotal()}</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
