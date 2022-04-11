import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='d-flex justify-content-between'>
            <div>
                <Header></Header>
            </div>
            <div className='navbar'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/registration">
                    <button>Registration</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;