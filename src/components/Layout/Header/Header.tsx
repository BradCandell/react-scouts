import React from 'react';
import Navigation from '../Navigation';
import { ReactComponent as Flag } from './Flag.svg';
import './Header.scss';
import pkg from '../../../../package.json';

const Header: React.FC = () => {
    return (
        <header className="scout-header">
            <Flag />
            <div className="scout-title">
                <h1>
                    {pkg.unit.level} - {pkg.unit.type} {pkg.unit.number}
                </h1>
                <h2>
                    {pkg.unit.city}, {pkg.unit.state}
                </h2>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;
