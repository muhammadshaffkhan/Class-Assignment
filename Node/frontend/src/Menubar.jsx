import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


const Menubar = () => {
    const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to={'/'} style={{ color: 'seagreen', fontWeight: 700 }}>
          MySite
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'} style={{ color: 'seagreen' }}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/about'} style={{ color: 'seagreen' }}>About</Nav.Link>
            <Nav.Link as={Link} to={'/contact'} style={{ color: 'seagreen' }}>Contact</Nav.Link>
          </Nav>
          <div className="d-flex">
            <Button variant="outline-info" className="me-2" onClick={() => navigate('/comment')}>Go to Comment</Button>
            <Button variant="outline-success" onClick={() => navigate('/contact')}>Get in touch</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menubar