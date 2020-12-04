import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const history = useHistory();
  return (
    <header>
      <Navbar className="justify-content-between">
        <Navbar.Brand href="#">Earl Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="earl-navbar" />
        {cookies.jwt ? (
          <>
            <Navbar.Collapse id="earl-navbar">
              <Nav>
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/earls">
                  <Nav.Link>EARLS</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/users">
                  <Nav.Link>Users</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
            <Nav>
              <Nav.Link
                onClick={() => {
                  removeCookie('jwt');
                  history.push('/login');
                }}
              >
                Logout
              </Nav.Link>
            </Nav>
          </>
        ) : null}
      </Navbar>
    </header>
  );
};

export default Header;
