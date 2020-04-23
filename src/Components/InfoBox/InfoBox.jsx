import React from 'react'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

//CSS
import './InfoBox.css'

export default function InfoBox(props) {
    return (
        <div className="info-box">
            <span className="info-box-icon bg-info text-white">
                <FontAwesomeIcon icon={faFlag} />
            </span>
            <div className="info-box-content ">
                <span className="info-box-text">
                    {props.text}
                </span>
                <span className="info-box-number">
                    {props.number}
                </span>
            </div>
        </div>
    )
}
