import { useNavigate } from 'react-router-dom'
import './navStyle.css'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navegador = () => {

    const navigate = useNavigate


    return (

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className='logo' href="#home">ROCKTRAVEL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto link-container">
                        <Nav.Link href="#home">Main</Nav.Link>
                        <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
                        <Nav.Link href="#link">Tours</Nav.Link>
                        <Nav.Link href="#link">Galería</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>


    )
}

export default Navegador
