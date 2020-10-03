import React from 'react';
import { Card } from 'react-bootstrap';

const Event = ({ event: { name, img } }) => {
    return (
        <Card className="col-md-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default Event;