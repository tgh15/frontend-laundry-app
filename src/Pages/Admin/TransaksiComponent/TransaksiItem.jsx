import React, { useContext } from 'react'

//Component
import TransaksiDetail from './TransaksiDetail'

//Context
import { TransaksiContext } from '../../../Context/TransaksiContext'

export default function TransaksiItem() {
    const { transaksi } = useContext(TransaksiContext)
    return (
        transaksi.map((el, key) => (
            <TransaksiDetail el={el} key={key} index={key} id={`collapse-${key}`} />
        ))
    )
}
