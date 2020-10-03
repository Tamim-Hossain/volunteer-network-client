import React from 'react';
import Event from '../Event/Event';
import fakeData from '../fakeData/fakeData';

const Home = () => {
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
                    fakeData.map(event => <Event event={event} />)
                }
            </div>
        </>
    );
};

export default Home;