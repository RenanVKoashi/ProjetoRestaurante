import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Navegacao() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">RestaPlate</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/cardapio">Cardápio</Nav.Link> 
              {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/action1">Action</NavDropdown.Item> 
                <NavDropdown.Item as={Link} to="/action2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/separated-link">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Nav>
              <Nav.Link as={Link} to="/more-details">More details</Nav.Link> 
              <Nav.Link as={Link} to="/memes">Dank memes</Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
