import React from 'react';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu'

const Header = (props) => (
    <div className="main-header">
        <Burger open={props.open} setOpen={props.setOpen} setClose={props.setClose} />
        <Menu open={props.open} setOpen={props.setOpen} setClose={props.setClose} />  
        <nav className="nav-bar">
            <a className="logo" href="#">LOGO</a>
            <ul className="list">
                <li><a href='#' className="header-a">Home</a></li>
                <li><a href='#train' className="header-a">Moon</a></li>
                <li><a href='#' className="header-a">Earth</a></li>
                <li><a className="header-a" onClick={props.showModal}>Contact</a></li>
                <li><a href='#' className="buy-button sink-on-hover">Buy</a></li>
            </ul>
        </nav>
    </div>
);

export default Header;