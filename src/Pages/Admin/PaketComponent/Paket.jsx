import React, { useContext, useState } from 'react'

//Context
import { PaketContext } from '../../../Context/PaketContext'
import PaketList from './PaketList'

export default function Paket() {
    const { paket, tambahPaket } = useContext(PaketContext)
    const [add, setAdd] = useState(false)
    const [input, setInput] = useState({ paket: "", harga: "" })

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        // console.log(input)
    }

    const handleSubmit = async () => {
        await tambahPaket(input)
        setAdd(false)
        setInput({ paket: "", harga: "" })
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h3>Paket</h3>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body">
                    {/* <button type="button" className="btn btn-primary" onClick={() => { setAdd(!add) }}>Tambah Paket</button> */}
                    <div className="table-responsive mt-3">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" width="5%">No</th>
                                    <th scope="col" width="35%">Paket</th>
                                    <th scope="col" width="35%">Harga</th>
                                    <th scope="col" width="25%">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {add ? (
                                    <tr>
                                        <th scope="row">{paket.length + 1}</th>
                                        <td><input type="text" name="paket" onChange={handleChange} /></td>
                                        <td><input type="text" name="harga" onChange={handleChange} /></td>
                                        <td>
                                            <button onClick={handleSubmit}>simpan</button>
                                            <button onClick={() => { setAdd(!add) }}>batal</button>
                                        </td>
                                    </tr>
                                ) : (<tr>
                                    <td colSpan="4">
                                        <button type="button" onClick={() => { setAdd(!add) }}>Tambah Paket</button>
                                    </td>
                                </tr>
                                    )}
                                <PaketList add={add} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
