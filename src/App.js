import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import Header from './Components/Header';

import Users from './screens/Users';
import Earls from './screens/Earls';
import Login from './screens/Login';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <main>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/earls">
              <Earls />
            </Route>
            <Route path="/">
              <div>Home</div>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
