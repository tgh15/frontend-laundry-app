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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>FrontPage</h1>
        </Route>
        <Route path="/login" component={Login} />
        <Route
          path="/admin"
          render={({ match: { url } }) => (
            <>
              <Admin>
                <Route path={`${url}/`} component={Dashboard} exact />
                <Route path={`${url}/profile`} component={Profile} />
                <Route path={`${url}/transaksi`} component={Transaksi} />
                <Route path={`${url}/paket`} component={Paket} />
                {/* <Route component={NoMatch} /> */}
              </Admin>
            </>
          )}
        />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}
export default App;

