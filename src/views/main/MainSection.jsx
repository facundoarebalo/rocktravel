import { Container, Row, Col, Button } from "react-bootstrap";
import "./mainSection.css";
import Cards from "../../components/cards/Cards";

const MainSection = () => {


  return (
    <Container fluid className="main-section">
      <Row className="background-image">
        <Col className="content text-center">
          <h1 className="title">TIEMPO DE VIAJAR</h1>
          <p className="description">
            La mejor época para visitar Tafí del Valle es de junio a
            septiembre, cuando la nieve se derrite y los senderos para caminatas y
            atracciones son accesibles.
          </p>
          <Row className="details">
            <Col md={4} className="detail-item">
              <p className="detail-text">
                Contemple el hermoso paisaje de Tafí del Valle en una enriquecedora excursión de día completo desde San Miguel de Tucumán. Mientras se aproxima al verde esplendor de la región, podrá deleitarse con los espectaculares valles y los vibrantes colores de la Valle de Tafí. Contemple más de 50 tipos de rocas antiguas durante una visita a la Reserva Arqueológica Los Menhires y vea las ruinas de la ciudad sagrada de Quilmes. Admire la arquitectura jesuita de Tafí del Valle en una visita guiada a pie y viaje en un cómodo vehículo con aire acondicionado.
              </p>
              <Button className="detail-button" >Más detalles</Button>
            </Col>
            <Col md={4} className="detail-item">
              <p className="detail-text">
                Descubra el esplendor natural de Yungas en una estimulante excursión de medio día desde San Miguel de Tucumán. Junto a su guía, disfrute de la tranquilidad de Yerba Buena y maravíllese ante los espectaculares barrancos y las colinas de Villa Nougues. Desde las colinas de San Javier, podrá disfrutar de unas vistas espectaculares y explorar los densos bosques de Raco y El Siambón antes de pasar por el dique de Cadilla. Haga una parada en el Museo Arqueológico Dr. Ernesto Padilla para poner punto final a su visita.
              </p>
              <Button className="detail-button">Más detalles</Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Col>
        <Row className="cards justify-content-center justify-content-md-around">
          <Cards />
        </Row>
      </Col>
    </Container>
  );
};

export default MainSection;
