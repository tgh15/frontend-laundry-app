import React, { useContext, useEffect } from 'react'

//Component
import TransaksiItem from './TransaksiItem'

//Context
import { TransaksiContext } from '../../../Context/TransaksiContext'


export default function Transaksi() {
    const { transaksi } = useContext(TransaksiContext)
    useEffect(() => {
        console.log(transaksi)
    }, [])
    return (
        <div className="container">
            <div className="card mb-3">
                <div className="card-body">
                    <h3>Transaksi</h3>
                    <div className="col-md-8 offset-md-2">
                        <input className="form-control" placeholder="cari transaksi" type="text" />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body card-wrapper">
                    {transaksi.length > 0 ? (
                        <TransaksiItem />
                    ) : (
                            <h1>Kosong</h1>
                        )}
                    {/* <AccordionList id={`collapse-${1}`} />
                    <AccordionList id={`collapse-${2}`} />
                    <AccordionList id={`collapse-${3}`} /> */}
                </div>
            </div>
        </div>
    )
}
