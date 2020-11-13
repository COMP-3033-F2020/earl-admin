import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

const Earls = () => {
  const match = useRouteMatch();

  return (
    <div>
      <h2>Earls</h2>

      <Switch>
        <Route path={`${match.path}/:earlId`}>
          <div>Single Earl</div>
        </Route>
        <Route path={match.path}>
          <div>
            Earl List
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default Earls;