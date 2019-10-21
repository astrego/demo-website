import React from 'react';
import { NavLink } from 'react-router-dom';

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
                <li className="footer-item"><a href="#" className="footer-social sink-on-hover"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16px" height="16px">
                    <title>facebook logo</title>
                    <path d="M7.5,15.5H2A1.5,1.5,0,0,1,.5,14V2A1.5,1.5,0,0,1,2,.5H14A1.5,1.5,0,0,1,15.5,2V14A1.5,1.5,0,0,1,14,15.5H10.5V10H12l1-2.5H10.5v-2c0-.55.45-.5,1-.5h1V2.5h-2a3,3,0,0,0-3,3v2h-2V10h2Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" fillRule="evenodd" />
                </svg></a></li>
                <li className="footer-item"> <a href="#" className="footer-social sink-on-hover"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16px" height="16px">
                    <title>linkedin</title>
                    <g>
                        <rect x="0.5" y="6" width="3.354" height="9.5" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.991,6.121c-.035-.011-.07-.023-.107-.033s-.09-.018-.136-.027a3,3,0,0,0-.6-.061h0a4.661,4.661,0,0,0-3.6,1.972V6H5.188v9.5H8.541V10.688s2.535-3.53,3.6-.937V15.5H15.5V9.354A3.346,3.346,0,0,0,12.991,6.121Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="2.141" cy="2.141" r="1.641" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg></a></li>
                <li className="footer-item"><a href="#" className="footer-social sink-on-hover"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16px" height="16px">
                    <title>twitter</title>
                    <path d="M15.5,3.755a6.414,6.414,0,0,1-1.771.486,3.064,3.064,0,0,0,1.353-1.7,6.162,6.162,0,0,1-1.95.745,3.076,3.076,0,0,0-5.321,2.1,3.173,3.173,0,0,0,.071.7A8.7,8.7,0,0,1,1.544,2.873a3.076,3.076,0,0,0,.946,4.11A3.037,3.037,0,0,1,1.1,6.6v.033A3.088,3.088,0,0,0,3.564,9.658a3.013,3.013,0,0,1-.807.1,2.7,2.7,0,0,1-.582-.053,3.1,3.1,0,0,0,2.873,2.143,6.178,6.178,0,0,1-3.813,1.312A5.755,5.755,0,0,1,.5,13.12,8.661,8.661,0,0,0,5.218,14.5,8.692,8.692,0,0,0,13.97,5.749c0-.136,0-.267-.011-.4A6.149,6.149,0,0,0,15.5,3.755Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                </svg></a></li>
                <li className="footer-item"><a href="#" className="footer-social sink-on-hover"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16px" height="16px">
                    <title>instagram</title>
                    <g>
                        <rect x="0.5" y="0.5" width="15" height="15" rx="4" ry="4" fill="none" stroke="#000" strokeMiterlimit="10" />
                        <circle cx="8" cy="8" r="3.5" fill="none" stroke="#000" strokeMiterlimit="10" />
                        <circle cx="12.5" cy="3.5" r="0.5" fill="none" stroke="#000" strokeMiterlimit="10" />
                    </g>
                </svg></a></li>
                <li className="footer-item"><a href="https://github.com/astrego/demo-website" target="_blank" className="footer-social sink-on-hover"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16px" height="16px">
                    <title>github</title>
                    <path d="M8,.5A7.522,7.522,0,0,0,5.63,15.154c.375.069.512-.163.512-.362,0-.179-.007-.651-.01-1.279C4.045,13.967,3.6,12.5,3.6,12.5a1.988,1.988,0,0,0-.832-1.1c-.681-.467.052-.457.052-.457a1.575,1.575,0,0,1,1.148.775,1.6,1.6,0,0,0,2.183.625,1.608,1.608,0,0,1,.476-1.005c-1.665-.19-3.416-.835-3.416-3.716a2.91,2.91,0,0,1,.772-2.018,2.709,2.709,0,0,1,.073-1.99s.63-.2,2.063.771a7.087,7.087,0,0,1,3.756,0c1.432-.973,2.06-.771,2.06-.771a2.705,2.705,0,0,1,.075,1.99,2.906,2.906,0,0,1,.771,2.018c0,2.888-1.754,3.524-3.424,3.71a1.8,1.8,0,0,1,.509,1.392c0,1.005-.009,1.816-.009,2.063,0,.2.135.435.516.361A7.523,7.523,0,0,0,8,.5Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                </svg></a></li>
            </ul>
        </div>
    </div>
);

export default Footer;