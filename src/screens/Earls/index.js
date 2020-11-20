import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { useState } from "react";

import { fetchAll } from '../../api';

import EarlList from '../../components/EarlList';
import EarlDetails from "../../components/EarlDetails";
import EarlForm from '../../components/EarlForm';

const Earls = () => {
  const match = useRouteMatch();
  const [earls, setEarls] = useState([]);

  if (earls.length === 0) {
    fetchAll().then(data => {
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
}

export default Earls;