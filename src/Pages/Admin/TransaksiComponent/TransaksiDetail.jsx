import React from 'react'
import TransaksiItemList from './TransaksiItemList'

export default function TransaksiDetail(props) {
    return (
        <div className="accordion mt-3" id={props.id}>
            <div className="card">
                <div className="card-header" id="headingOne">
                    <div className="mb-0 d-flex justify-content-between align-items-center" data-toggle="collapse" data-target={`#collapse${props.id}`}>
                        <h5>{props.el.kode_transaksi}</h5>
                        <h5>{props.el.status_pengerjaan ? "Proses" : "Selesai"}</h5>
                    </div>
                </div>

                <div id={`collapse${props.id}`} className="collapse mb-3" aria-labelledby="headingOne" data-parent={`#${props.id}`}>
                    <div className="card-body">
                        <dl className="row">
                            <dt className="col-sm-3">Kode Transaksi</dt>
                            <dd className="col-sm-9 text-danger"><strong>{props.el.kode_transaksi}</strong></dd>

                            <dt className="col-sm-3">Tanggal Transaksi</dt>
                            <dd className="col-sm-9">{props.el.tanggal_transaksi}</dd>

                            <dt className="col-sm-3">Nama Pelanggan</dt>
                            <dd className="col-sm-9">{props.el.nama_pelanggan}</dd>

                            <dt className="col-sm-3">No. Hp</dt>
                            <dd className="col-sm-9">{props.el.no_hp}</dd>

                            <dt className="col-sm-3">Alamat</dt>
                            <dd className="col-sm-9">{props.el.alamat}</dd>

                            <dt className="col-sm-3">Status Pembayaran</dt>
                            <dd className="col-sm-9">{props.el.status_pembayaran ? "Lunas" : "Belum Lunas"}</dd>
                        </dl>
                        <hr />
                        <h4>Rincian Transaksi</h4>
                        <div className="table-responsive-md">
                            <table className="table table-md table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Paket</th>
                                        <th scope="col">Biaya</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.el.transaksi_list.map((tr, key) => (
                                        <TransaksiItemList tr={tr} key={key} index={key} />
                                    ))}
                                    <tr className="table-info">
                                        <td className="table-info" colSpan="3"><strong>Total</strong></td>
                                        <td className="table-info">{props.el.total_bayar}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
