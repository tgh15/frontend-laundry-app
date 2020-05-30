import React from 'react'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import './FeatureSection.css'

export default function FeatureSection() {
    return (
        <section id="feature">
            <h1 className="title">More than just a laundry</h1>
            <div className="feature">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body d-flex justify-content-center">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"><div className="card">
                        <div className="card-body d-flex justify-content-center">
                            Mantap
                            </div>
                    </div></div>
                    <div className="col-md-4"><div className="card">
                        <div className="card-body d-flex justify-content-center">
                            Mantap
                            </div>
                    </div></div>
                </div>
            </div>
        </section>
    )
}
