import React from 'react';
import Event from '../Event/Event';
import fakeData from '../fakeData/fakeData';

const Home = () => {
    return (
        <div className="row">
            {
                fakeData.map(event => <Event event={event} />)
            }
        </div>
    );
};

export default Home;