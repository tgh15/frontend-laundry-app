import React, { useState, useContext } from 'react'

//CSS
import './TrackingSection.css'

import Loading from '../../../Components/Loading/Loading'

import { TransaksiContext } from '../../../Context/TransaksiContext'
import TrackingResult from './TrackingResult'

export default function TrackingSection() {
    const { frontQuery, queryFrontResult, setQueryFrontResult, isLoading, setIsLoading } = useContext(TransaksiContext)
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setQueryFrontResult([])
        setIsLoading(true)
        frontQuery(search)
    }
    return (
        <section id="tracking">
            <h2>Lacak Pesanan</h2>
            <form onSubmit={handleSubmit} className="input-group">
                <input type="text"
                    className="form-control"
                    placeholder="Kode transaksi anda"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-warning" disabled={isLoading || search === ''}>Cari</button>
                </div>
            </form>
            {isLoading ? <Loading /> : null}
            {queryFrontResult.length === 1 ?

                // console.log(queryFrontResult)
                queryFrontResult[0].hasOwnProperty('message') ? (
                    <p>{queryFrontResult[0].message}</p>
                ) : (
                        <TrackingResult data={queryFrontResult[0]} />
                    )
                : null}
            {/* <TrackingResult /> */}
        </section>
    )
}
