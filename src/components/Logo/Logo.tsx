import React from 'react';
import styles from './Logo.module.scss';
import { useScoutContext } from '../../contexts/ScoutContext';

export interface LogoProps {
    size?: string;
}

const Logo: React.FC<LogoProps> = props => {
    let logoPath = '/logo-corporate.svg';
    const sctx = useScoutContext();

    if (sctx.type === 'Pack') {
        logoPath = '/logo-cs.svg';
    }

    if (sctx.type === 'Troop') {
        logoPath = './logo-bsa.svg';
    }

    return <img src={logoPath} alt="Logo" className={styles.logo} />;
};

export default Logo;
