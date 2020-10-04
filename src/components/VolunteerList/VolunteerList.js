import React from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';

const VolunteerList = ({ volunteer: { userName, email, eventName, date } }) => {
    return (
        <div className="row">
            <div className="col-md-2">
                {userName}
            </div>
            <div className="col-md-3">
                {email}
            </div>
            <div className="col-md-2">
                {date}
            </div>
            <div className="col-md-4">
                {eventName}
            </div>
            <div className="col-md-1">
                {<RiDeleteBinFill style={{ color: 'red' }} />}
            </div>
        </div>
    );
};

export default VolunteerList;