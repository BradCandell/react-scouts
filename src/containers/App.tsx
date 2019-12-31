import React from 'react';
import Routes from '../routes';
import Layout from '../components/Layout';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes />
            </Layout>
        </BrowserRouter>
    );
};

export default App;
