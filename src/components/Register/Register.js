import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Register = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { eventName } = useParams();
    let today = new Date().toISOString().slice(0, 10)
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className="mx-auto border p-4 rounded" style={{ width: '40%' }}>
            <h3 className="font-weight-bold text-center">Register as a Volunteer</h3>
            <form onSubmit={handleSubmit(onSubmit)}  >
                <label htmlFor="name">Name</label>
                <input className="form-control" id="name" defaultValue={loggedInUser.displayName} placeholder="Full Name" name="name" type="text" ref={register({ required: true })} />
                {errors.name && <span className="text-danger">Name is required</span>}
                <br />
                <label htmlFor="email">Email</label>
                <input className="form-control" id="email" defaultValue={loggedInUser.email} placeholder="Email" name="email" type="email" ref={register({ required: true })} />
                {errors.name && <span className="text-danger">Email is required</span>}
                <br />
                <label htmlFor="position">Position</label>
                <input className="form-control" id="position" defaultValue={eventName} placeholder="Position" name="position" type="text" ref={register({ required: true })} />
                {errors.position && <span className="text-danger">Position is required</span>}
                <br />
                <label htmlFor="date">Date</label>
                <input className="form-control" id="date" defaultValue={today} placeholder="Date" name="date" type="date" ref={register({ required: true })} />
                {errors.date && <span className="text-danger">Date is required</span>}
                <br />
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="description" placeholder="Description..." name="description" type="text" ref={register({ required: true })} />
                {errors.description && <span className="text-danger">Description is required</span>}
                <br />
                <input type="submit" className="btn btn-success mt-2 btn-block" />
            </form >
        </div>
    );
};

export default Register;