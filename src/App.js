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
import Transaksi from './Pages/Admin/Transaksi';
import Paket from './Pages/Admin/Paket';
import ProtectedRoute from './ProtectedRoute';

import Landing from "./Pages/Front/Landing";

//Context
import AuthContextProvider from './Context/AuthContext';
import PaketContextProvider from './Context/PaketContext';

function App() {
  return (
    <AuthContextProvider>
      <PaketContextProvider>
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
                  <Route path={`${url}/transaksi`} component={Transaksi} />
                  <Route path={`${url}/paket`} component={Paket} />
                  {/* <Route component={NoMatch} /> */}
                </Admin>
              )}
            />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </PaketContextProvider>
    </AuthContextProvider>
  );
}
export default App;

