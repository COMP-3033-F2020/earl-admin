import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

const Earls = () => {
  const match = useRouteMatch();
  const [earls, setEarls] = useState([]);
  
  if (earls.length === 0) {
    axios.get('http://localhost:3001/earls').then(({ data }) => {
      setEarls(data);
    });
  }

  return (
    <div>
      <h2>Earls</h2>

      <Switch>
        <Route path={`${match.path}/:earlId`}>
          <div>Single Earl</div>
          <Link to={match.path}>Back to list</Link>
        </Route>
        <Route path={match.path}>
          <div>
            {
              earls.map((earl) => {
                return (
                  <div key={ earl._id }>
                    <Link to={`${match.path}/${earl._id}`}>{ earl.target }</Link>
                  </div>
                )
              })
            }
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default Earls;