import React, { useContext, useEffect } from 'react'

//Component
import TransaksiItem from './TransaksiItem'

//Context
import { TransaksiContext } from '../../../Context/TransaksiContext'


export default function Transaksi() {
    const { getTransaksi, searchTransaksi, searchResult } = useContext(TransaksiContext)
    // useEffect(() => {
    //     getTransaksi()
    //     // console.log(transaksi)
    // }, [getTransaksi])
    const handleChange = (e) => {
        searchTransaksi(e.target.value)
    }
    return (
        <>
            <div className="mb-4">
                <h3 className="h3 mb-0 text-gray-800">Transaksi</h3>
                <div className="col-md-8 offset-md-2 input-group">
                    <input className="form-control" placeholder="cari transaksi" type="text" onInput={handleChange} onChange={handleChange} />
                    <div className="input-group-append">
                        <span className="input-group-text">{searchResult.length} Hasil</span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body card-wrapper">
                    {searchResult.length > 0 ? (
                        <TransaksiItem />
                    ) : (
                            <h1>Kosong</h1>
                        )}
                    {/* <AccordionList id={`collapse-${1}`} />
                    <AccordionList id={`collapse-${2}`} />
                    <AccordionList id={`collapse-${3}`} /> */}
                </div>
            </div>
        </>
    )
}
