import React from 'react';

const RegisteredEvent = ({ regEvent: {regEvent:{ userName, email, eventName, date }} }) => {
    return (
        <div>
            <h2>{userName}</h2>
            <h2>{email}</h2>
            <h2>{eventName}</h2>
            <h2>{date}</h2>
        </div>
    );
};

export default RegisteredEvent;