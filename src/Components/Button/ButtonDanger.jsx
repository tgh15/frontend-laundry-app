import React from 'react'

export default function ButtonDanger(props) {
    return (
        <button className="btn btn-danger btn-sm" onClick={props.onClick} type={props.type}>
            {props.children}
        </button>
    )
}
