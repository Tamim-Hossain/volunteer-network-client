import React from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';

const VolunteerList = ({ volunteer: { userName, email, eventName, date, _id } }) => {
    const handleDashboardActions = () => {
        fetch(`http://localhost:4000/delete/${_id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    alert('Successfully Deleted!')
                }
            });
    };
    return (
        <>
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
                    <RiDeleteBinFill className="text-danger" onClick={handleDashboardActions} style={{ cursor: 'pointer' }} />
                </div>
            </div>
            <hr />
        </>
    );
};

export default VolunteerList;