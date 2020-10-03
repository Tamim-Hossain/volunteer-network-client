import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="white" className="sticky-top" expand="lg">
            <Navbar.Brand to="/home"><Link to="/"><img src={logo} alt="" className="icon" /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/" className="btn">Home</Link>
                    <Link to="#" className="btn">Donation</Link>
                    <Link to="#" className="btn">Events</Link>
                    <Link to="#" className="btn">Blog</Link>
                    <Link to="/login" className="btn btn-info text-white">Register</Link>
                    <Link to="/login" className="btn btn-secondary text-white">Admin</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;