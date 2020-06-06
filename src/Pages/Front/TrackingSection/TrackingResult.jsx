import React from 'react'

import './TrackingResult.css'

export default function TrackingResult({ data }) {
    return (
        <div className="tracking-result">
            <ul>
                <li><span className={data.status_pengerjaan ? "proses" : "selesai"}>{data.status_pengerjaan ? "Proses" : "Selesai"}</span> <span className={data.status_pembayaran ? "lunas" : "belum-lunas"}>{data.status_pembayaran ? "Lunas" : "Belum Lunas"}</span></li>
                <li>{data.kode_transaksi}</li>
                <li>{data.tanggal_transaksi}</li>
                <li>{data.nama_pelanggan}</li>
                <li>Rp. {data.total_bayar}</li>
            </ul>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Paket</th>
                        <th>Qty</th>
                        <th className="text-center">Harga</th>
                    </tr>
                </thead>
                <tbody>
                    {data.transaksi_list.map((el, key) => (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{el.paket}</td>
                            <td>{el.kuantitas}</td>
                            <td className="text-right">Rp. {el.harga}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
