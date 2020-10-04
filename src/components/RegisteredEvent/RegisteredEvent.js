import React from 'react';

const RegisteredEvent = ({ regEvent: { regEvent: { eventName, date } } }) => {
    return (
        <div className="shadow-sm p-3 mb-2 bg-light rounded col-md-3 border m-3">
            <h5>{eventName}</h5>
            <p>Event Date: {date}</p>
            <button className="btn btn-secondary">Cancel</button>
        </div>
    );
};

export default RegisteredEvent;