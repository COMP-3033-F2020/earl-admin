import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import User from '../user';

const Users = () => {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <h2>Users</h2>

      <Switch>
        <Route path={`${match.path}/:userId`}>
          <User />
        </Route>
        <Route path={match.path}>
          <h3>Select a user</h3>
          <ul>
            <li>
              <Link to={`${match.path}/1`}>
                User 1
              </Link>
            </li>
            <li>
              <Link to={`${match.path}/2`}>
                User 2
              </Link>
            </li>
            <li>
              <Link to={`${match.path}/3`}>
                User 3
              </Link>
            </li>
          </ul>
        </Route>
      </Switch>
    </div>
  );
}

export default Users;