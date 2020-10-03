import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="white" className="sticky-top" expand="lg">
            <Navbar.Brand><Link to="/"><img src={logo} alt="" className="icon" /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/" className="btn m-1">Home</Link>
                    <Link to="#" className="btn m-1">Donation</Link>
                    <Link to="#" className="btn m-1">Events</Link>
                    <Link to="#" className="btn m-1">Blog</Link>
                    <Link to="/login" className="btn m-1 btn-info text-white">Register</Link>
                    <Link to="/login" className="btn m-1 btn-secondary text-white">Admin</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;