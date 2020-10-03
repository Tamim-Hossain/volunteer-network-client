import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className="mx-auto border text-center p-3" style={{ width: '40%' }}>
            <h3 className="font-weight-bold">Register as a Volunteer</h3>
            <form onSubmit={handleSubmit(onSubmit)}  >
                <input className="form-control" placeholder="Full Name" name="name" type="text" ref={register({ required: true })} />
                {errors.name && <span className="text-danger">Name is required</span>}
                <br />
                <input className="form-control" placeholder="Email" name="email" type="email" ref={register({ required: true })} />
                {errors.name && <span className="text-danger">Email is required</span>}
                <br />
                <input className="form-control" placeholder="Date" name="date" type="date" ref={register({ required: true })} />
                {errors.date && <span className="text-danger">Date is required</span>}
                <br />
                <input className="form-control" placeholder="Description" name="description" type="text" ref={register({ required: true })} />
                {errors.description && <span className="text-danger">Description is required</span>}
                <br />
                <input className="form-control" placeholder="Position" name="position" type="text" ref={register({ required: true })} />
                {errors.position && <span className="text-danger">Position is required</span>}
                <br />
                <input type="submit" className="btn btn-success mt-2 btn-block" />
            </form >
        </div>
    );
};

export default Register;