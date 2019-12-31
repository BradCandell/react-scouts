import React from 'react';
import './Footer.scss';
import Navigation from '../Navigation/Navigation';

const Footer: React.FC = () => {
    return (
        <footer className="scout-footer">
            <div className="scout-footer-top">
                <p>
                    1415 Menomonie Street - Eau Claire, WI 54703
                    <br />
                    715-559-4794
                </p>

                <Navigation />
            </div>
            <div className="scout-footer-bottom">Chippewa Valley Council</div>
        </footer>
    );
};

export default Footer;
