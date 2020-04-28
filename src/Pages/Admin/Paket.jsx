import React, { useContext, useState } from 'react'

//Context
import { PaketContext } from '../../Context/PaketContext'

export default function Paket() {
    const { paket, tambahPaket, hapusPaket } = useContext(PaketContext)
    const [add, setAdd] = useState(false)
    const [input, setInput] = useState()

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        // console.log(input)
    }

    const handleSubmit = async () => {
        tambahPaket(input)
        await console.log(input)
        await setAdd(false)
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
                    <button type="button" className="btn btn-primary" onClick={() => { setAdd(!add) }}>Tambah Paket</button>
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
                                        <td><button onClick={handleSubmit}>Tambahkan</button></td>
                                    </tr>
                                ) : (null)}
                                {paket.length > 0 ? (
                                    paket.map((el, key) => (
                                        <tr key={key}>
                                            <th scope="row">{key + 1}</th>
                                            <td>{el.paket}</td>
                                            <td>{el.harga}</td>
                                            <td>
                                                <button onClick={() => hapusPaket(el.id)}>delete</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                        add ? (null) : (<tr><td colSpan="4">Kosong</td></tr>)
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
