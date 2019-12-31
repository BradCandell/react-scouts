import React from 'react';
import Navigation from '../Navigation';
import './Footer.scss';
import pkg from '../../../../package.json';

const Footer: React.FC = () => {
    const unitAddress = `${pkg.unit.address.street} - ${pkg.unit.address.city}, ${pkg.unit.address.state} ${pkg.unit.address.postalCode}`;
    return (
        <footer className="scout-footer">
            <div className="scout-footer-top">
                <p>
                    {unitAddress}
                    <br />
                    {pkg.unit.phone}
                </p>
                <Navigation />
            </div>
            <div className="scout-footer-bottom">{pkg.unit.council.name}</div>
        </footer>
    );
};

export default Footer;
