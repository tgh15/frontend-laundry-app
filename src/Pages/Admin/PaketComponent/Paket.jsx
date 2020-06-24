import React, { useState, useContext } from 'react'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

//Context
import { PaketContext } from '../../../Context/PaketContext'
import { KategoriContext } from '../../../Context/KategoriContext'

import PaketList from './PaketList'

export default function Paket() {
    const { paket, tambahPaket } = useContext(PaketContext)
    const { kategori } = useContext(KategoriContext)
    const [add, setAdd] = useState(false)
    const [input, setInput] = useState({ kategori_id: 0, paket: "", harga: "" })


    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        console.log(input)
    }

    const handleSubmit = async () => {
        console.log(input)
        await tambahPaket(input)
        // setAdd(false)
        // setInput({ kategori: "", paket: "", harga: "" })
    }

    return (
        <>
            <div className="mb-4">
                <h1 className="h3 mb-0 text-gray-800">Paket</h1>
            </div>
            <div className="card shadow mb-4">
                <div className="card-body">
                    {/* <button type="button" className="btn btn-primary" onClick={() => { setAdd(!add) }}>Tambah Paket</button> */}
                    <div className="table-responsive mt-3">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" width="5%">No</th>
                                    <th scope="col" width="35%">Kategori</th>
                                    <th scope="col" width="35%">Paket</th>
                                    <th scope="col" width="35%">Harga</th>
                                    <th scope="col" width="25%">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {add ? (
                                    <tr className="table-info">
                                        <th scope="row">{paket.length + 1}</th>
                                        <td>
                                            <select defaultValue={'0'} name="kategori_id" className="custom-select custom-select-sm" onChange={handleChange}>
                                                <option disabled value="0">Kategori</option>
                                                {kategori.length > 0 ? (
                                                    kategori.map((kat, index) => (
                                                        <option key={index} value={kat.id}>{kat.kategori}</option>
                                                    ))
                                                ) : (<option value="">Kosong</option>)}

                                            </select>
                                        </td>
                                        <td><input className='form-control form-control-sm' type="text" name="paket" onChange={handleChange} /></td>
                                        <td><input className='form-control form-control-sm' type="number" name="harga" onChange={handleChange} /></td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-2" onClick={handleSubmit}>
                                                <FontAwesomeIcon icon={faSave} />
                                            </button>
                                            <button className="btn btn-danger btn-sm" onClick={() => { setAdd(!add) }}>
                                                <FontAwesomeIcon icon={faTimesCircle} />
                                            </button>
                                        </td>
                                    </tr>
                                ) : (<tr>
                                    <td colSpan="5" style={{ cursor: "pointer" }} className="text-center table-info" onClick={() => { setAdd(!add) }}>
                                        Tambah Paket
                                    </td>
                                </tr>
                                    )}
                                <PaketList add={add} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    )
}
