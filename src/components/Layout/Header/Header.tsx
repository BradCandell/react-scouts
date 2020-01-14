import React from 'react';
import Navigation from '../Navigation';
import { ReactComponent as Flag } from './Flag.svg';
import styles from './Header.module.scss';
import pkg from '../../../../package.json';
import Logo from '../../Logo/Logo';

const Header: React.FC = () => {
    const unitName = `${pkg.unit.level} - ${pkg.unit.type} ${pkg.unit.number}`;
    const unitLocation = `${pkg.unit.address.city}, ${pkg.unit.address.state}`;

    return (
        <header className={styles.container}>
            <Flag />
            <Logo />
            <div className={styles.title}>
                <h1>{unitName}</h1>
                <h2>{unitLocation}</h2>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;
