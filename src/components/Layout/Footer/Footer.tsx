import React from 'react';
import Navigation from '../Navigation';
import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="scout-footer">
            <div className="scout-footer-top">
                <p>
                    1201 Main Street - Eau Claire, WI 54703
                    <br />
                    715-123-4145
                </p>

                <Navigation />
            </div>
            <div className="scout-footer-bottom">Chippewa Valley Council</div>
        </footer>
    );
};

export default Footer;
