import { useNavigate } from 'react-router-dom'
import './navStyle.css'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navegador = () => {

    const navigate = useNavigate()


    return (

        <Navbar expand="lg" className="bg-black mb-3" sticky='top'>
            <Container>
                <Navbar.Brand className='logo' onClick={() => navigate('/')}>ROCKTRAVEL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='navcollapse'>
                    <Nav className="me-auto navlink-container">
                        <Nav.Link className='links mx-4' onClick={() => navigate('/about')}>Sobre Nosotros</Nav.Link>
                        <Nav.Link className='links mx-4' onClick={() => navigate('/tours')}>Tours</Nav.Link>
                        <Nav.Link className='links mx-4' onClick={() => navigate('/galeria')}>Galería</Nav.Link>
                        <Nav.Link className='links mx-4' onClick={() => navigate('/contacto')}>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}

export default Navegador
