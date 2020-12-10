import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  useHistory,
} from 'react-router-dom';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

import { fetchAll } from '../../api';

import EarlList from '../../Components/EarlList';
import EarlDetails from '../../Components/EarlDetails';
import EarlForm from '../../Components/EarlForm';

const Earls = () => {
  const [cookies] = useCookies();
  const match = useRouteMatch();
  const [earls, setEarls] = useState([]);
  const history = useHistory();

  if (!cookies.jwt) {
    history.push('/login');
    return null;
  }

  if (earls.length === 0) {
    fetchAll().then((data) => {
      setEarls(data);
    });
  }

  return (
    <div>
      <h2>Earls</h2>
      <Link to="/earls/create">Create EARL</Link>
      <Switch>
        <Route path={`${match.path}/create`}>
          <EarlForm />
        </Route>
        <Route path={`${match.path}/:earlId`}>
          <EarlDetails />
        </Route>
        <Route path={match.path}>
          <EarlList earls={earls} />
        </Route>
      </Switch>
    </div>
  );
};

export default Earls;
