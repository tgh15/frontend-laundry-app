import React from 'react'

export default function AccordionList(props) {
    return (
        <div className="accordion mt-3" id={props.id}>
            <div className="card">
                <div className="card-header" id="headingOne">
                    <div className="mb-0 d-flex justify-content-between align-items-center" data-toggle="collapse" data-target={`#collapse${props.id}`}>
                        <h5>TGT-001</h5>
                        <h5>Transaksi: 3</h5>
                    </div>
                </div>

                <div id={`collapse${props.id}`} className="collapse mb-3" aria-labelledby="headingOne" data-parent={`#${props.id}`}>
                    <div className="card-body">
                        <dl className="row">
                            <dt className="col-sm-3">Kode Transaksi</dt>
                            <dd className="col-sm-9 text-danger"><strong>TGT-001</strong></dd>

                            <dt className="col-sm-3">Tanggal Transaksi</dt>
                            <dd className="col-sm-9">12-04-2020</dd>

                            <dt className="col-sm-3">Nama Pelanggan</dt>
                            <dd className="col-sm-9">Tsee</dd>

                            <dt className="col-sm-3">No. Hp</dt>
                            <dd className="col-sm-9">082323</dd>

                            <dt className="col-sm-3">Alamat</dt>
                            <dd className="col-sm-9">testing</dd>
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
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Tes</td>
                                        <td>Tes</td>
                                        <td>Tes</td>
                                    </tr>
                                    <tr className="table-info">
                                        <td className="table-info" colSpan="3"><strong>Total</strong></td>
                                        <td className="table-info">9828</td>
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
