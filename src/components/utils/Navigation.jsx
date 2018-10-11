import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul className="navigation nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/planets">
                    Planets
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/moons">
                    Moons
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/image_database">
                    Database
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">
                    Contact
                </Link>
            </li>
        </ul>
    );
};

export default Navigation;
