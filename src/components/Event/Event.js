import { Link } from 'react-router-dom';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Event.css'

const Event = ({ event: { name, img } }) => {
    return (
        <Card className="col-md-2 text-center m-3 p-2 border-0 shadow p-3 mb-5 bg-white rounded" style={{ cursor: 'pointer' }} >
            <Link className="text-decoration-none" to={`/event/${name}`}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Link>
        </Card >
    );
};

export default Event;