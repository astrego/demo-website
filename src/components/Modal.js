import React from 'react';

const Modal = (props) => {

    return (
        <div className="modal">
            <a className="close-x sink-on-hover" onClick={props.closed}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18">
                <path d="M0 0h18v18H0zm0 0h18v18H0z" fill="none" />
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
            </svg></a>

            <div className="modal-container">
            <h2 className="modal-title">Contact</h2>
                <div className="modal-element">
                    <svg className="modal-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20">
                        <title>dial phone</title>
                        <g>
                            <path d="M13.879,5.54a.5.5,0,0,1-.311-.108,8.722,8.722,0,0,0-2.96-1.542.5.5,0,0,1-.335-.631l.6-1.894a11.653,11.653,0,0,0-5.751,0l.6,1.894a.5.5,0,0,1-.335.631,8.722,8.722,0,0,0-2.96,1.542.5.5,0,0,1-.692-.068L.119,3.453A.5.5,0,0,1,.187,2.74,12.4,12.4,0,0,1,4.286.563C4.3.556,4.32.549,4.339.543A.533.533,0,0,1,4.406.527a12.681,12.681,0,0,1,7.188,0,.533.533,0,0,1,.067.016c.019.006.036.013.053.02a12.4,12.4,0,0,1,4.1,2.177.5.5,0,0,1,.068.713l-1.62,1.91A.5.5,0,0,1,13.879,5.54Zm-2.5-2.452A9.706,9.706,0,0,1,13.8,4.356l.975-1.15a11.42,11.42,0,0,0-2.947-1.551ZM1.221,3.207,2.2,4.356A9.706,9.706,0,0,1,4.623,3.088L4.167,1.656A11.42,11.42,0,0,0,1.221,3.207Z" />
                            <path d="M15,16H1a1,1,0,0,1-1-1V11.5a.5.5,0,0,1,.109-.312l4-5A.5.5,0,0,1,4.5,6h7a.5.5,0,0,1,.391.188l4,5A.5.5,0,0,1,16,11.5V15A1,1,0,0,1,15,16Zm0-1v0ZM1,11.675V15H15V11.675L11.259,7H4.741Z" />
                            <path d="M6.5,7A.5.5,0,0,1,6,6.5V4.54a.5.5,0,0,1,1,0V6.5A.5.5,0,0,1,6.5,7Z" />
                            <path d="M9.5,7A.5.5,0,0,1,9,6.5V4.54a.5.5,0,0,1,1,0V6.5A.5.5,0,0,1,9.5,7Z" />
                            <rect x="5" y="9" width="1" height="1" />
                            <rect x="7.5" y="9" width="1" height="1" />
                            <rect x="9.5" y="9" width="1" height="1" />
                            <rect x="5" y="11" width="1" height="1" />
                            <rect x="7.5" y="11" width="1" height="1" />
                            <rect x="9.5" y="11" width="1" height="1" />
                            <rect x="5" y="13" width="1" height="1" />
                            <rect x="7.5" y="13" width="1" height="1" />
                            <rect x="9.5" y="13" width="1" height="1" />
                        </g>
                    </svg>
                    <p>+31 622 88 99</p>
                </div>

                <div className="modal-element">
                    <svg className="modal-icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20">
                        <title>email</title>
                        <g>
                            <path d="M15,14H1a1,1,0,0,1-1-1V4A1,1,0,0,1,1,3H15a1,1,0,0,1,1,1v9A1,1,0,0,1,15,14Zm0-1v0ZM1,4v9H15V4Z" />
                            <path d="M8,10a.5.5,0,0,1-.3-.1L.2,4.4A.5.5,0,1,1,.8,3.6L8,8.88,15.2,3.6A.5.5,0,0,1,15.8,4.4L8.3,9.9A.5.5,0,0,1,8,10Z" />
                            <path d="M15.5,13.5a.5.5,0,0,1-.295-.1L9.064,8.9A.5.5,0,1,1,9.655,8.1l6.14,4.5a.5.5,0,0,1-.3.9Z" />
                            <path d="M.5,13.5a.5.5,0,0,1-.3-.9l6.14-4.5a.5.5,0,1,1,.591.807L.8,13.4A.5.5,0,0,1,.5,13.5Z" />
                        </g>
                    </svg>
                    <p>demo@demo.com</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;