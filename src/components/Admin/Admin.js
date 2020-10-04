import React, { useEffect, useState } from 'react';
import VolunteerList from '../VolunteerList/VolunteerList';

const Admin = () => {
    const [volunteerList, setVolunteerList] = useState([]);
    useEffect(() => {
        fetch('https://network-volunteer.herokuapp.com/register')
            .then(res => res.json())
            .then(data => setVolunteerList(data))
    }, [volunteerList])
    return (
        <div className="container">
            <div className="row bg-light font-weight-bold">
                <div className="col-md-2">
                    <p>Name</p>
                </div>
                <div className="col-md-3">
                    <p>Email</p>
                </div>
                <div className="col-md-2">
                    <p>Date</p>
                </div>
                <div className="col-md-4">
                    <p>Task</p>
                </div>
                <div className="col-md-1">
                    <p>Action</p>
                </div>
            </div>
            {
                volunteerList.map(volunteer => <VolunteerList key={volunteer._id} volunteer={volunteer} />)
            }
        </div>
    );
};

export default Admin;