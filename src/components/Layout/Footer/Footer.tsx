import React from 'react';
import Navigation from '../Navigation';
import styles from './Footer.module.scss';
import pkg from '../../../../package.json';

const Footer: React.FC = () => {
    const unitAddress = `${pkg.unit.address.street} - ${pkg.unit.address.city}, ${pkg.unit.address.state} ${pkg.unit.address.postalCode}`;
    return (
        <footer className={styles.container}>
            <div className={styles.top}>
                <p>
                    {unitAddress}
                    <br />
                    {pkg.unit.phone}
                </p>
                <Navigation />
            </div>
            <div className={styles.bottom}>{pkg.unit.council.name}</div>
        </footer>
    );
};

export default Footer;
