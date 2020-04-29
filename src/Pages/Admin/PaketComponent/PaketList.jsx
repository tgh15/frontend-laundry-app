import React, { useContext } from 'react'

//Context
import { PaketContext } from '../../../Context/PaketContext'
import PaketItem from './PaketItem'

export default function PaketList(props) {
    const { paket } = useContext(PaketContext)
    return (
        paket.length > 0 ? (

            paket.map((el, key) => (
                <PaketItem
                    key={key}
                    el={el}
                    index={key}
                />

            ))
        ) : (
                props.add ? (null) : (<tr><td colSpan="4">Kosong</td></tr>)
            )
    )
}
