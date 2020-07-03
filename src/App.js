import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Style
import './App.css';

//Layouts
import Admin from './Layout/Admin'

//Pages
import Dashboard from './Pages/Admin/Dashboard'
import Profile from './Pages/Admin/Profile';
import NoMatch from './Pages/NoMatch'
import Login from './Pages/Login/Login';
import Transaksi from './Pages/Admin/TransaksiComponent/Transaksi';
import Paket from './Pages/Admin/PaketComponent/Paket';
import ProtectedRoute from './ProtectedRoute';
import Laporan from './Pages/Admin/Laporan/Laporan';
import TambahTransaksi from './Pages/Admin/TambahTransaksi/TambahTransaksi';

import Landing from "./Pages/Front/Landing";

//Context
import AuthContextProvider from './Context/AuthContext';
import PaketContextProvider from './Context/PaketContext';
import TransaksiContextProvider from './Context/TransaksiContext';
import LaporanContextProvider from './Context/LaporanContext';

function App() {
  return (
    <AuthContextProvider>
      <PaketContextProvider>
        <TransaksiContextProvider>
          <LaporanContextProvider>
            <Router>
              <Switch>
                <Route path="/" exact>
                  <Landing />
                </Route>
                <Route path="/login" component={Login} />
                <ProtectedRoute
                  path="/admin"
                  render={({ match: { url } }) => (
                    <Admin>
                      <Route path={`${url}/`} component={Dashboard} exact />
                      <Route path={`${url}/profile`} component={Profile} />
                      <Route path={`${url}/transaksi`} component={Transaksi} exact />
                      <Route path={`${url}/transaksi/Tambah`} component={TambahTransaksi} />
                      <Route path={`${url}/paket`} component={Paket} />
                      <Route path={`${url}/laporan`} component={Laporan} />
                      {/* <Route component={NoMatch} /> */}
                    </Admin>
                  )}
                />
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </LaporanContextProvider>
        </TransaksiContextProvider>
      </PaketContextProvider>
    </AuthContextProvider>
  );
}
export default App;

