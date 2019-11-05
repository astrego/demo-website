import React from 'react';
import { NavLink } from 'react-router-dom';
import Proptypes from 'prop-types';

const Menu = (props) => {

    const cssClasses = [
        "menu",
        props.open ? "menu-open" : "menu-closed"
    ]

    return (
        <div className={cssClasses.join(' ')}>
            <NavLink to="/" exact={true} className="menu-a"  onClick={props.setClose}>Home</NavLink>
            <NavLink to="/moon" className="menu-a" onClick={props.setClose}>Moon</NavLink>
            <NavLink to="/earth" className="menu-a" onClick={props.setClose}>Earth</NavLink>
            <a className="menu-a" href="#" onClick={() => {
                props.showModal();
                props.setClose();
            }}>Contact</a>
            <a href="https://github.com/astrego/demo-website" target="_blank" className="menu-a" onClick={props.setClose}>Github</a>
        </div>
    );
};

Menu.propTypes = {
    open: Proptypes.bool,
    setClose: Proptypes.func

}

export default Menu;