import React, { useContext, useState } from 'react'

//Context
import { PaketContext } from '../../../Context/PaketContext'

export default function PaketItem(props) {
    const { hapusPaket, editPaket } = useContext(PaketContext)
    const [isEdit, setIsEdit] = useState(false)
    const editPaketField = () => {
        setIsEdit(!isEdit)
    }
    const simpanEdit = async () => {
        const id = props.el.id
        const data = {}
        data.paket = document.getElementById('paket').value
        data.harga = document.getElementById('harga').value
        await editPaket(id, data)
        setIsEdit(!isEdit)
    }
    return (
        isEdit ? (
            <tr key={props.index}>
                <th scope="row">{props.index + 1}</th>
                <td><input type="text" name="paket" defaultValue={props.el.paket} id="paket" /></td>
                <td><input type="number" name="harga" defaultValue={props.el.harga} id="harga" /></td>
                <td>
                    <button onClick={simpanEdit}>Simpan</button>
                    <button onClick={editPaketField}>Batal</button>
                </td>
            </tr>
        ) : (
                <tr key={props.index}>
                    <th scope="row">{props.index + 1}</th>
                    <td>{props.el.paket}</td>
                    <td>{props.el.harga}</td>
                    <td>
                        <button onClick={() => hapusPaket(props.el.id)}>delete</button>
                        <button onClick={editPaketField}>edit</button>
                    </td>
                </tr>
            )
    )
}
