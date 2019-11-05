import React from 'react';
import { NavLink } from 'react-router-dom';

import FacebookLogo from '../images/facebook-logo.svg';
import LinkedInLogo from '../images/linkedin-logo.svg';
import TwitterLogo from '../images/twitter-logo.svg';
import InstagramLogo from '../images/instagram-logo.svg';
import GithubLogo from '../images/github-logo.svg';

const Footer = () => (
    <div className="footer-main">
        <div>
            <p className="footer-company-name">Company Name</p>
            <p className="footer-address-line">Tel: +31 622 88 99</p>
            <p className="footer-address-line">Email: demo@demo.com</p>
        </div>
        <div>
            <ul className="footer-list">
                <li className="footer-item"><NavLink to="/" exact={true} className="footer-link">Home</NavLink></li>
                <li className="footer-item"><NavLink to="/moon" className="footer-link">Moon</NavLink></li>
                <li className="footer-item"><NavLink to="/earth" className="footer-link">Earth</NavLink></li>
            </ul>
            <ul className="footer-list-social">
                <li className="footer-item">
                    <a href="#" className="footer-social sink-on-hover"><FacebookLogo /></a>
                </li>
                <li className="footer-item"> 
                    <a href="#" className="footer-social sink-on-hover"><LinkedInLogo /></a>
                </li>
                <li className="footer-item">
                    <a href="#" className="footer-social sink-on-hover"><TwitterLogo /></a>
                </li>
                <li className="footer-item">
                    <a href="#" className="footer-social sink-on-hover"><InstagramLogo /></a>
                </li>
                <li className="footer-item">
                    <a href="https://github.com/astrego/demo-website" target="_blank" className="footer-social sink-on-hover"><GithubLogo /></a>
                </li>
            </ul>
        </div>
    </div>
);

export default Footer;