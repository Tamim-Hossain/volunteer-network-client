import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <>
            <div className="text-center mb-3">
                <h2 className="font-weight-bold">I grow by helping people in need.</h2>
            </div>
            <div className="d-flex justify-content-center mb-3">
                <input className="form-control w-25" placeholder="Search here..." />
                <button className="btn btn-info ml-2" type="button">Search</button>
            </div>
            <div className="row">
                {
                    events.map(event => <Event event={event} key={event._id} />)
                }
            </div>
        </>
    );
};

export default Home;