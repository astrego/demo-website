import React from 'react';

const Menu = (props) => {

    const cssClasses = [
        "menu",
        props.open ? "menu-open" : "menu-closed"
    ]

    return (
        <div className={cssClasses.join(' ')}>
            <a className="menu-a" href="#" onClick={props.setClose}>Home</a>
            <a className="menu-a" href="#" onClick={props.setClose}>Moon</a>
            <a className="menu-a" href="#" onClick={props.setClose}>Earth</a>
            <a className="menu-a" href="#" onClick={props.setClose}>Contact</a>
        </div>
    );
};

export default Menu;