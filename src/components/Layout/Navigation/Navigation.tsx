import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/events">Events</NavLink>
            </li>
            <li>
                <NavLink to="/join">Join</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <Link to="/" target="_blank">
                    Scoutbook
                </Link>
            </li>
        </ul>
    );
};

export default Navigation;
