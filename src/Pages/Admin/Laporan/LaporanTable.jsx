import React from 'react'
import { ExportPdf } from '../ExportPdf'

export default function LaporanTable({ dataLaporan }) {
    const generateTanggal = (tanggal) => {
        let date = new Date(tanggal)
        let day = date.getDate()
        let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"][date.getMonth()]
        let year = date.getFullYear()
        return day + ' ' + month + ' ' + year
    }
    const exportPDF = () => {
        let data = {
            action: 'laporan',
            tanggal: dataLaporan[0].tanggal_transaksi === dataLaporan[dataLaporan.length - 1].tanggal_transaksi ?
                'Pada Tanggal ' + generateTanggal(dataLaporan[0].tanggal_transaksi) :
                'Dari Tanggal ' + generateTanggal(dataLaporan[0].tanggal_transaksi) + ' sampai ' + generateTanggal(dataLaporan[dataLaporan.length - 1].tanggal_transaksi),
            data: dataLaporan
        }
        ExportPdf(data)
    }
    return (
        <>
            <div className="card mb-4">
                <div className="card-header py-3 d-flex justify-content-between mb-3">
                    <h6 className="m-0 font-weight-bold text-primary d-flex align-items-center">Hasil Pencarian</h6>
                    <button className="btn btn-primary btn-sm" onClick={exportPDF}>Export PDF</button>
                </div>
                <div className="text-center">
                    <h5>Laporan Transaksi Berkah Laundry</h5>
                    <p>
                        {
                            dataLaporan[0].tanggal_transaksi === dataLaporan[dataLaporan.length - 1].tanggal_transaksi ?
                                'Pada Tanggal ' + generateTanggal(dataLaporan[0].tanggal_transaksi) :
                                'Dari Tanggal ' + generateTanggal(dataLaporan[0].tanggal_transaksi) + ' sampai ' + generateTanggal(dataLaporan[dataLaporan.length - 1].tanggal_transaksi)
                        }
                    </p>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Kode Transaksi</th>
                                    <th scope="col">Nama Pelanggan</th>
                                    <th scope="col">No. Hp</th>
                                    <th scope="col">Alamat</th>
                                    <th scope="col">Total Transaksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataLaporan.map((el, idx) => (
                                        <tr key={idx}>
                                            <th scope="row">{idx + 1}</th>
                                            <td>{el.kode_transaksi}</td>
                                            <td>{el.nama_pelanggan}</td>
                                            <td>{el.no_hp}</td>
                                            <td>{el.alamat}</td>
                                            <td>Rp. {el.total_bayar}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
