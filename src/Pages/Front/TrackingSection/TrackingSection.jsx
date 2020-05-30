import React, { useState } from 'react'

//CSS
import './TrackingSection.css'

import Loading from '../../../Components/Loading/Loading'

export default function TrackingSection() {
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(!isLoading)
    }
    return (
        <section id="tracking">
            <h2>Lacak Pesanan</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Kode transaksi anda" />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-warning">Cari</button>
                    </div>
                </div>
            </form>
            {isLoading ? <Loading /> : null}
        </section>
    )
}
