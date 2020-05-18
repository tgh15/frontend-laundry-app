import React from 'react'

export default function IdentitasForm(props) {

    return (
        <dl className="row">
            <dt className="col-sm-3">Kode Transaksi</dt>
            <dd className="col-sm-9"> <input type="text" readOnly value={props.identitas.kode_transaksi} className="form-control" name="kode_transaksi" /> </dd>

            <dt className="col-sm-3">Nama Pelanggan</dt>
            <dd className="col-sm-9"> <input onChange={props.change} type="text" className="form-control" name="nama_pelanggan" /> </dd>

            <dt className="col-sm-3">No. Hp</dt>
            <dd className="col-sm-9"><input onChange={props.change} type="text" className="form-control" name="no_hp" /></dd>

            <dt className="col-sm-3">Alamat</dt>
            <dd className="col-sm-9"><textarea onChange={props.change} className="form-control" rows="3" name="alamat" ></textarea></dd>

            <dt className="col-sm-3">Status Pembayaran</dt>
            <dd className="col-sm-9">
                <select name="status_transaksi" className="custom-select custom-select-sm" onChange={props.change}>
                    <option value='null' defaultValue>Belum Lunas</option>
                    <option value="1">Lunas</option>
                </select>
            </dd>
        </dl>
    )
}
