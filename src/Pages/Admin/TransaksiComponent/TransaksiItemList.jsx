import React from 'react'

export default function TransaksiItemList(props) {
    return (
        <tr>
            <th scope="row">{props.index + 1}</th>
            <td>{props.tr.kuantitas}{props.tr.kiloan ? " Kg" : ""} </td>
            <td>{props.tr.paket}</td>
            <td>Rp. {props.tr.harga}</td>
        </tr>
    )
}
