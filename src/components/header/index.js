import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Earl Admin</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/earls">EARLS</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;