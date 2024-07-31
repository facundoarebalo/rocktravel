import { Container, Row, Col, Button } from 'react-bootstrap';
import './mainSection.css';
import Cards from '../../components/cards/Cards';

const MainSection = () => {
    return (
        <Container fluid className="main-section">
            <Row className="background-image">
                <Col className="content text-center">
                    <h1 className="title">TIME TO TRAVEL</h1>
                    <p className="description">
                        The best time to visit Rocky Mountain National Park is from June to September when the snow is melted and the hiking trails and attractions are accessible. "The Crown Jewel of Rocky Mountain NP", Longs Peak is one of the most coveted summits in the West.
                    </p>
                    <Row className="details">
                        <Col md={4} className="detail-item">
                            <p className="detail-text">The Crown Jewel of Rocky Mountain NP, Longs Peak is one of the most coveted summits in the West.</p>
                            <Button className="detail-button">MORE DETAILED</Button>
                        </Col>
                        <Col md={4} className="detail-item">
                            <p className="detail-text">The best time to visit the Rockies is from June to September when the snow is melted.</p>
                            <Button className="detail-button">MORE DETAILED</Button>
                        </Col>
                        <Col md={4} className="detail-item">
                            <p className="detail-text">This National Park attracts the most visitors from June to September.</p>
                            <Button className="detail-button">MORE DETAILED</Button>
                        </Col>
                    </Row>
                </Col>
                <Col className="pagination text-center">
                    <ul className="pagination-list">
                        <li>01</li>
                        <li>02</li>
                        <li className="active">03</li>
                        <li>04</li>
                    </ul>
                </Col>
            </Row>
            <Col>
                <Row className="cards">
                    <Cards />
                    
                </Row>
            </Col>
        </Container>
    );
}

export default MainSection;