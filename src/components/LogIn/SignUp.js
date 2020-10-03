import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className=" text-center">
            <h4 className="mb-4">Login With</h4>
            <p>Already have an account?<Link className="text-decoration-none" to="/login">Log In</Link></p>
        </div>
    );
};

export default SignUp;