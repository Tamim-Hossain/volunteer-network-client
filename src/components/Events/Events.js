import React, { useContext, useEffect, useState } from 'react';
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
                registeredEvents.map(regEvent => <RegisteredEvent key={regEvent._id} regEvent={{ regEvent }} />)
            }
        </div>
    );
};

export default Events;