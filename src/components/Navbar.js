import React from 'react';
import { NavLink } from 'react-router-dom';

import GithubIcon from '../images/github-icon.svg';

const Navbar = (props) => (
    <nav className="nav-bar">
        <a className="logo" href="#">LOGO</a>
        <ul className="list">
            <li><NavLink to="/" exact={true} className="header-a">Home</NavLink></li>
            <li><NavLink to="/moon" className="header-a">Moon</NavLink></li>
            <li><NavLink to="/earth" className="header-a">Earth</NavLink></li>
            <li><a className="header-a" onClick={props.click}>Contact</a></li>
            <li>
                <a href="https://github.com/astrego/demo-website" target="_blank" className="buy-button sink-on-hover">
                    <GithubIcon className="github-icon" />
                    <span className="buy-button-link">Github</span>
                </a>
            </li>
        </ul>
    </nav>
);

export default Navbar;