import React from 'react';
import Header from './Header';
import Footer from './Footer';

import './Layout.scss';
import '../../styles/Scouts.Cub.scss';
import '../../styles/Scouts.BSA.scss';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <div className="container-fluid">{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
