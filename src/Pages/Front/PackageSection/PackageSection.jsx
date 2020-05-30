import React from 'react'

//CSS
import './PackageSection.css'
import { useContext } from 'react'

//Context
import { PaketContext } from '../../../Context/PaketContext'

export default function PackageSection() {
    const { paket } = useContext(PaketContext)
    return (
        <section id="package">
            <div className="row">
                <div className="col-md-6 col-sm-6 d-flex justify-content-center align-items-center">
                    <h2>Temukan paket yang sesuai</h2>
                </div>
                <div className="col-md-6 col-sm-6">
                    <ul>
                        {paket.length > 0 ? (
                            paket.map((el, key) => (
                                <li key={key}>{el.paket}<span>Rp. {el.harga}</span></li>
                            ))
                        ) : (
                                <li>Yabai desu nee~</li>
                            )}
                    </ul>
                </div>
            </div>
        </section>
    )
}
