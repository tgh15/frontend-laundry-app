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
                        <div className="col-md-3">
                            <InfoBox text="Testing" number="1000" />
                        </div>
                        <div className="col-md-3">
                            <InfoBox text="Testing" number="1000" />
                        </div>
                        <div className="col-md-3">
                            <InfoBox text="Testing" number="1000" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12 col-lg-10">
                    <div className="card">
                        {/* <div className="card-header">
                            Daftar
                        </div> */}
                        <div className="card-body">
                            Dadtat
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
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
