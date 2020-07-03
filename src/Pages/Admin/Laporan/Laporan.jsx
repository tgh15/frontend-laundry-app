import React, { useState, useContext } from 'react'
import Loading from '../../../Components/Loading/Loading'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { LaporanContext } from '../../../Context/LaporanContext'
import LaporanTable from './LaporanTable';

export default function Laporan() {
    const { getLaporan, isLoading, dataLaporan } = useContext(LaporanContext)
    // const [isLoading, setIsLoading] = useState(false)
    const [date, setDate] = useState({ start: new Date(), end: new Date() })

    const handleChangeStart = (e) => {
        setDate({ ...date, start: e })
        // console.log(e)
    }
    const handleChangeEnd = (e) => {
        setDate({ ...date, end: e })
        // console.log(e)
    }

    const submitSearch = async () => {
        getLaporan(date)
    }

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
                            <div className="form-group col-md-6 d-flex flex-column">
                                <label htmlFor="inputEmail4">Tanggal Awal</label>
                                <DatePicker
                                    selected={date.start}
                                    onChange={handleChangeStart}
                                    dateFormat="dd/MM/yyyy"
                                    name="start"
                                    className="form-control" />
                                {/* <input type="text" className="form-control date-picker" id="tanggal-awal" /> */}
                            </div>
                            <div className="form-group col-md-6 d-flex flex-column">
                                <label htmlFor="inputPassword4">Tanggal Akhir</label>
                                <DatePicker
                                    selected={date.end}
                                    onChange={handleChangeEnd}
                                    dateFormat="dd/MM/yyyy"
                                    name="start"
                                    className="form-control" />
                                {/* <input type="text" className="form-control date-picker" id="tanggal-akhir" /> */}
                            </div>
                        </div>
                        <button type="button" onClick={submitSearch} className="btn btn-primary btn-block">Cari</button>
                    </form>
                </div>
            </div>
            {isLoading ? <Loading /> : null}
            {dataLaporan.length > 0 ? (
                <LaporanTable dataLaporan={dataLaporan} tanggal={date} />
            ) : (null)}
        </>
    )
}
