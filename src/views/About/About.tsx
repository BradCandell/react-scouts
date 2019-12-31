import React from 'react';

export const About: React.FC = () => {
    return (
        <>
            <h1>About</h1>
            <p>
                <button
                    onClick={() => {
                        document.documentElement.setAttribute('data-theme', 'cub');
                    }}
                >
                    Cub Scouts
                </button>

                <button
                    onClick={() => {
                        document.documentElement.setAttribute('data-theme', 'bsa');
                    }}
                >
                    Scouts BSA
                </button>
                <button
                    onClick={() => {
                        document.documentElement.removeAttribute('data-theme');
                    }}
                >
                    Corporate
                </button>
            </p>
        </>
    );
};

export default About;
