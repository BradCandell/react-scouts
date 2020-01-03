import React from 'react';
import Header from './Header';
import Footer from './Footer';

import './Layout.scss';

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
