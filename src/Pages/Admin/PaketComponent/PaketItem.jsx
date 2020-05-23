import React, { useContext, useState } from 'react'
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimesCircle, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

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
        data.paket = document.getElementById(`paket-${props.index}`).value
        data.harga = document.getElementById(`harga-${props.index}`).value
        await editPaket(id, data)
        setIsEdit(!isEdit)
    }
    return (
        isEdit ? (
            <tr key={props.index}>
                <th scope="row">{props.index + 1}</th>
                <td><input type="text" className='form-control form-control-sm' name="paket" defaultValue={props.el.paket} id={`paket-${props.index}`} /></td>
                <td><input type="number" className='form-control form-control-sm' name="harga" defaultValue={props.el.harga} id={`harga-${props.index}`} /></td>
                <td>
                    <button className="btn btn-primary btn-sm mr-2" onClick={simpanEdit}>
                        <FontAwesomeIcon icon={faSave} />
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={editPaketField}>
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </button>
                </td>
            </tr>
        ) : (
                <tr key={props.index}>
                    <th scope="row">{props.index + 1}</th>
                    <td>{props.el.paket}</td>
                    <td>Rp. {props.el.harga}</td>
                    <td>
                        <button className="btn btn-warning mr-2 btn-sm" onClick={editPaketField}>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button className="btn btn-danger btn-sm" onClick={() => hapusPaket(props.el.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </td>
                </tr>
            )
    )
}
