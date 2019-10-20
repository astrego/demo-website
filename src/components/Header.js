import React from 'react';
import { NavLink } from 'react-router-dom';
import {CSSTransition } from 'react-transition-group';

import Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import Modal from './Modal';
import Backdrop from './Backdrop';

class Header extends React.Component {

    state = {
        open: false,
        modalIsOpen: false
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.closeOutside, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.closeOutside, false);
    }

    showModal = () => {
        this.setState({modalIsOpen: true});
      }
    
    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    setClose = () => {
        this.setState(() => ({
            open: false
        }));
    };

    setOpen = () => {
        this.setState(() => ({
            open: true
        }))
    }

    closeOutside = (e) => {
        console.log("closeOutside()")
        if ((this.node) && (!this.node.contains(e.target)) && (this.state.open || this.state.modalIsOpen)) {
            this.setState(() => ({
                open: false,
                modalIsOpen: false,
            }));
        }
        
    }

    render() {
        return (
            <div >
                <div className="main-header" ref={node => this.node = node}>
                    <Burger open={this.state.open} setOpen={this.setOpen} setClose={this.setClose} />
                    <Menu open={this.state.open} setOpen={this.setOpen} setClose={this.setClose} showModal={this.showModal}/>
                    <nav className="nav-bar">
                        <a className="logo" href="#">LOGO</a>
                        <ul className="list">
                            <li><NavLink to="/" exact={true} className="header-a">Home</NavLink></li>
                            <li><NavLink to="/moon" className="header-a">Moon</NavLink></li>
                            <li><NavLink to="/earth" className="header-a">Earth</NavLink></li>
                            <li><a className="header-a" onClick={this.showModal}>Contact</a></li>
                            <li>
                                <div className="buy-button sink-on-hover">
                                    <svg className="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20">
                                        <title>github</title>
                                        <path d="M5.76,15.667a1.213,1.213,0,0,1-.221-.021,7.992,7.992,0,1,1,5-.019.974.974,0,0,1-.865-.155.875.875,0,0,1-.309-.68l0-.421c0-.387.007-.971.007-1.642a1.286,1.286,0,0,0-.336-1.014.5.5,0,0,1,.271-.876c1.547-.172,2.979-.681,2.979-3.213a2.413,2.413,0,0,0-.64-1.68.5.5,0,0,1-.094-.525,2.123,2.123,0,0,0,.028-1.3,4.093,4.093,0,0,0-1.419.684.489.489,0,0,1-.415.068A6.749,6.749,0,0,0,8,4.636a6.645,6.645,0,0,0-1.741.235A.49.49,0,0,1,5.842,4.8a4,4,0,0,0-1.422-.68,2.125,2.125,0,0,0,.03,1.3.5.5,0,0,1-.094.525,2.419,2.419,0,0,0-.641,1.681c0,2.532,1.429,3.043,2.973,3.22a.5.5,0,0,1,.273.873,1.106,1.106,0,0,0-.311.7.5.5,0,0,1-.29.386,2.31,2.31,0,0,1-1.795.1,2,2,0,0,0,1.459.119.511.511,0,0,1,.419.1.5.5,0,0,1,.188.387l.011,1.282a.856.856,0,0,1-.882.875ZM8,1A7.022,7.022,0,0,0,5.64,14.628l0-.539a2.278,2.278,0,0,1-2.51-1.441,1.549,1.549,0,0,0-.579-.8c-.213-.14-.687-.465-.537-.938.1-.3.36-.459.821-.465a2.1,2.1,0,0,1,1.581,1.034,1.017,1.017,0,0,0,1.307.5A2.663,2.663,0,0,1,5.8,11.72c-1.232-.263-3.085-1.081-3.085-4.094A3.388,3.388,0,0,1,3.427,5.5a3.361,3.361,0,0,1,.167-2.062.5.5,0,0,1,.313-.293c.193-.063.913-.186,2.3.707a7.6,7.6,0,0,1,3.577,0c1.391-.893,2.109-.767,2.3-.707a.5.5,0,0,1,.312.292A3.354,3.354,0,0,1,12.573,5.5a3.386,3.386,0,0,1,.711,2.129c0,3.013-1.853,3.828-3.088,4.089a2.881,2.881,0,0,1,.173,1.014c0,.674,0,1.26-.007,1.649v.246A7.02,7.02,0,0,0,8,1Z" />
                                    </svg>
                                    <a href='#' className="buy-button-link">Github</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <CSSTransition
                    in={this.state.modalIsOpen}
                    timeout={500}
                    unmountOnExit
                    classNames="modal">
                    <Modal closed={this.closeModal}/>
                </CSSTransition>
                <CSSTransition 
                    in={this.state.modalIsOpen}
                    timeout={500}
                    unmountOnExit
                    classNames="backdrop">
                    <Backdrop/>
                </CSSTransition>
            </div>    
        )
    }
}


export default Header;