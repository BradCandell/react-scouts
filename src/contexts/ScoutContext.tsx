import React from 'react';
import pkg from '../../package.json';

interface ScoutContextData {
    type: string;
}

const ScoutContext = React.createContext<ScoutContextData>({ type: 'Pack' });

function useScoutContext(): ScoutContextData {
    const context = React.useContext<ScoutContextData>(ScoutContext);
    return context;
}

const ScoutProvider: React.FC = ({ children }) => {
    const value: ScoutContextData = {
        type: pkg.unit.type
    };
    let dataTheme = '';
    if (value.type.toLowerCase() === 'pack') {
        dataTheme = 'cub';
    }

    if (value.type.toLowerCase() === 'troop') {
        dataTheme = 'bsa';
    }

    React.useEffect(() => {
        if (dataTheme !== '') {
            document.documentElement.setAttribute('data-theme', dataTheme);
        }
    }, []);
    return <ScoutContext.Provider value={value}>{children}</ScoutContext.Provider>;
};

export { ScoutProvider, useScoutContext };
