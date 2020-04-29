import React from 'react'

//Component
import AccordionList from '../../../Components/AccordionList/AccordionList'

export default function Transaksi() {
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
                    <AccordionList id={`collapse-${1}`} />
                    <AccordionList id={`collapse-${2}`} />
                    <AccordionList id={`collapse-${3}`} />
                </div>
            </div>
        </div>
    )
}
