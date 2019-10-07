import React from 'react';

const Burger = (props) => {

    const cssClasses = [
        "button-burger",
        props.open ? "div-burger-open" : "div-burger-closed"
    ]

    const cssFunctions = props.open ? props.setClose : props.setOpen;

    return (
        <div className={cssClasses.join(' ')} onClick={cssFunctions}>
            <div className="div-burger"/>
            <div className="div-burger"/>
            <div className="div-burger"/>
        </div>
    );
};

export default Burger;