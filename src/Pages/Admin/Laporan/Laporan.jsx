import React, { useState } from 'react'
import Loading from '../../../Components/Loading/Loading'

export default function Laporan() {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <>
            <div className="mb-4">
                <h1 className="h3 mb-0 text-gray-800">Laporan</h1>
            </div>
            <div className="card mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Cari Data Berdasarkan Tanggal</h6>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Tanggal Awal</label>
                                <input type="text" className="form-control date-picker" data-date-format="dd-mm-yyyy" id="tanggal-awal" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Tanggal Akhir</label>
                                <input type="text" className="form-control date-picker" data-date-format="dd-mm-yyyy" id="tanggal-akhir" />
                            </div>
                        </div>
                        <button type="button" onClick={() => setIsLoading(!isLoading)} className="btn btn-primary btn-block">Cari</button>
                    </form>
                </div>
            </div>
            {isLoading ? <Loading /> : null}

        </>
    )
}
