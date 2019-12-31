import React from 'react';
import Navigation from '../Navigation';
import { ReactComponent as Flag } from './Flag.svg';
import './Header.scss';
import pkg from '../../../../package.json';

const Header: React.FC = () => {
    const unitName = `${pkg.unit.level} - ${pkg.unit.type} ${pkg.unit.number}`;
    const unitLocation = `${pkg.unit.address.city}, ${pkg.unit.address.state}`;

    return (
        <header className="scout-header">
            <Flag />
            <div className="scout-title">
                <h1>{unitName}</h1>
                <h2>{unitLocation}</h2>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;
