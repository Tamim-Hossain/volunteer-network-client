import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import RegisteredEvent from '../RegisteredEvent/RegisteredEvent';

const Events = () => {
    const [registeredEvents, setRegisteredEvents] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://network-volunteer.herokuapp.com/selected-register?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setRegisteredEvents(data))
    }, [registeredEvents])
    return (
        <div className="row d-flex justify-content-around">
            {
                registeredEvents.length === 0 && <p className="mt-5 display-4 text-center">No event found. Please <Link className="text-decoration-none" to="/">create a new event</Link> with your email address.</p>
            }
            {
                registeredEvents.map(regEvent => <RegisteredEvent key={regEvent._id} regEvent={{ regEvent }} />)
            }
        </div>
    );
};

export default Events;