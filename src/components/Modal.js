import React from 'react';
import Proptypes from 'prop-types';

import DialPhone from '../images/dial-phone.svg';
import Email from '../images/email.svg';
import Cross from '../images/cross.svg';

const Modal = (props) => {

    return (
        <div className="modal">
            <a className="close-x sink-on-hover" onClick={props.closed}>
                <Cross/>
            </a>
            <div className="modal-container">
                    <h2 className="modal-title">Contact</h2>
                    <DialPhone className="modal-icon"/>
                    <p className="modal-p">+31 622 88 99</p>
                    <Email className="modal-icon" />
                    <p className="modal-p">demo@demo.com</p>
            </div>
        </div>
    );
};

Modal.propTypes = {
    closed: Proptypes.func
}

export default Modal;