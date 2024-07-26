import Card from 'react-bootstrap/Card';

const Cards = () => {
    const lugares = [
        {
            id: 1,
            nombre: "Lugar 1",
            descripcion: "Descripción del lugar 1",
            imagen: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            nombre: "Lugar 2",
            descripcion: "Descripción del lugar 2",
            imagen: "https://via.placeholder.com/150"
        },
        {
            id: 3,
            nombre: "Lugar 3",
            descripcion: "Descripción del lugar 3",
            imagen: "https://via.placeholder.com/150"
        },
        {
            id: 4,
            nombre: "Lugar 4",
            descripcion: "Descripción del lugar 4",
            imagen: "https://via.placeholder.com/150"
        }

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
