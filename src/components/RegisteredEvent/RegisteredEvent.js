import React from 'react';

const RegisteredEvent = ({ regEvent: { regEvent: { eventName, date, _id } } }) => {
    const deleteRegistration = () => {
        fetch(`http://localhost:4000/delete/${_id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((result) => {
                // alert('Successfully Deleted!')
            });
    };
    return (
        <div className="shadow-sm p-3 mb-2 bg-light rounded col-md-3 border m-3">
            <h5>{eventName}</h5>
            <p>Event Date: {date}</p>
            <button onClick={deleteRegistration} className="btn btn-secondary">Cancel Task</button>
        </div>
    );
};

export default RegisteredEvent;