import React from 'react'

//Components
import InfoBox from '../../Components/InfoBox/InfoBox'

export default function Dashboard() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h3>Dashboard</h3>
                    <div className="row">
                        <div className="col-md-3">
                            <InfoBox text="Testing" number="1000" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-10">

                </div>
                <div className="d-none d-lg-block col-md-2 col-lg-2 right-side-bar fixed-top">
                    <div className="fixed col-md-2">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="#list-item-1">Active</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#list-item-2">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
