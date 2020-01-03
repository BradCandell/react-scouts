import React from 'react';

export const Join: React.FC = () => {
    const generateItems = () => {
        const results: Array<React.ReactElement> = new Array<React.ReactElement>();
        for (let i = 1; i < 100; i++) {
            results.push(<li key={i}>{i}</li>);
        }
        return results;
    };

    return (
        <>
            <h1>Join</h1>
            <ul>{generateItems()}</ul>
        </>
    );
};

export default Join;
