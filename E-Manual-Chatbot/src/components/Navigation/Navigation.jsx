import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation(props) {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" className="nav-bar bg-body-tertiary">
        <Container >
          <Navbar.Brand href="/">Samsung TV e-Manual Chatbot</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="https://www.samsungsvc.co.kr/">Service Center</Nav.Link>
              <Nav.Link eventKey={2} href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
}
