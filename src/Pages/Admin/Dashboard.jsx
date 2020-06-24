import React, { useContext } from 'react'

import { TransaksiContext } from '../../Context/TransaksiContext'
import { PaketContext } from '../../Context/PaketContext'

//Components
import InfoBox from '../../Components/InfoBox/InfoBox'

export default function Dashboard() {
    const { transaksiHariIni, transaksi } = useContext(TransaksiContext)
    const { paket } = useContext(PaketContext)
    // const filter = transaksi.filter(trx => {
    //     return trx.status_pembayaran = 0
    // })

    return (
        <>
            <div className="mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>

            <div className="row">
                <InfoBox title={"Paket"} value={paket.length} color={"success"} />
                <InfoBox title={"Semua Transaksi"} value={transaksi.length} color={"warning"} />
                {/* <InfoBox title={"Semua Transaksi"} value={filter.length} color={"warning"} /> */}
            </div>

            <div className="row mt-3">
                <div className="col-md-12 col-lg-12">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Transaksi Hari Ini</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Kode Transaksi</th>
                                            <th scope="col">Nama Pelanggan</th>
                                            <th scope="col">No Hp</th>
                                            {/* <th scope="col">Alamat</th> */}
                                            <th scope="col">Status Pembayaran</th>
                                            <th scope="col">Status Pengerjaan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transaksiHariIni.length > 0 ? (
                                            transaksiHariIni.map((el, key) => (
                                                <tr key={key} data-toggle="modal" data-target="#exampleModal">
                                                    <th scope="row">{key + 1}</th>
                                                    <td>{el.kode_transaksi}</td>
                                                    <td>{el.nama_pelanggan}</td>
                                                    <td>{el.no_hp}</td>
                                                    {/* <td>{el.alamat}</td> */}
                                                    <td>
                                                        {el.status_pembayaran ? <button className="btn btn-success btn-sm">Lunas</button> : <button className="btn btn-danger btn-sm">Belum Lunas</button>}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                                <tr>
                                                    <td colSpan="7" className="text-center">Tidak ada transaksi hari ini</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
