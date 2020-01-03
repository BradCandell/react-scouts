import React from 'react';
import Routes from '../routes';
import Layout from '../components/Layout';
import { BrowserRouter } from 'react-router-dom';
import { ScoutProvider } from '../contexts/ScoutContext';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ScoutProvider>
                <Layout>
                    <Routes />
                </Layout>
            </ScoutProvider>
        </BrowserRouter>
    );
};

export default App;
