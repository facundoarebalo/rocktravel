import Card from 'react-bootstrap/Card';
import imagen1 from '../../assets/img/6e.jpg'
import imagen2 from '../../assets/img/8d.jpg'
import imagen3 from '../../assets/img/mirador-del-indio.jpg'

const Cards = () => {
    const lugares = [
        {
            id: 1,
            nombre: "Recorrido de día completo por Tafí del Valle y las ruinas de Quilmes desde Tucumán",
            descripcion: "Contemple más de 50 tipos de rocas antiguas durante una visita a la Reserva Arqueológica Los Menhires y vea las ruinas de la ciudad sagrada de Quilmes. Admire la arquitectura jesuita de Tafí del Valle en una visita guiada a pie y viaje en un cómodo vehículo con aire acondicionado.",
            imagen: imagen1
        },
        {
            id: 2,
            nombre: "Excursión de medio día a Yungas desde Tucumán",
            descripcion: "Desde las colinas de San Javier, podrá disfrutar de unas vistas espectaculares y explorar los densos bosques de Raco y El Siambón antes de pasar por el dique de Cadilla. Haga una parada en el Museo Arqueológico Dr. Ernesto Padilla para poner punto final a su visita.",
            imagen: imagen2
        },
        {
            id: 3,
            nombre: "Mirador del Indio",
            descripcion: "Hermoso monumento ubicado aproximadamente en la mitad de la subida hacia Tafi del Valle si viajas desde Tucumán, muy lindo entorno natural , algunos puestos de artesanías, muy buena parada para apreciar la naturaleza de la yunga.",
            imagen: imagen3
        },
    ]

    return (
        <>
            {lugares.map((lugar) => (
                <Card key={lugar.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={lugar.imagen} />
                    <Card.Body>
                        <Card.Title>{lugar.nombre}</Card.Title>
                        <Card.Text>{lugar.descripcion}</Card.Text>
                    </Card.Body>

                </Card>
            ))}
        </>

    )
}

export default Cards
