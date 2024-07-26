import { useNavigate } from 'react-router-dom'
import './navStyle.css'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navegador = () => {

    const navigate = useNavigate


    return (

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className='logo' onClick={() => navigate('/')}>ROCKTRAVEL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto link-container">
                        <Nav.Link onClick={() => navigate('/main')}>Main</Nav.Link>
                        <Nav.Link onClick={() => navigate('/about')}>Sobre Nosotros</Nav.Link>
                        <Nav.Link onClick={() => navigate('/tours')}>Tours</Nav.Link>
                        <Nav.Link onClick={() => navigate('/galeria')}>Galería</Nav.Link>
                        <Nav.Link onClick={() => navigate('/contacto')}>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>


    )
}

export default Navegador
