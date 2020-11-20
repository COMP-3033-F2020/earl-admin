import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
  <header>
    <Navbar>
      <Navbar.Brand href="#">
        Earl Admin
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="earl-navbar" />
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
    </Navbar>
  </header>
);

export default Header;