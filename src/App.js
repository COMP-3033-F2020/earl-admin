import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/header';
import Users from './components/users';
import Earls from './components/earls';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
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
