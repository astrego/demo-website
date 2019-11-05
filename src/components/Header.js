import React from 'react';
import { NavLink } from 'react-router-dom';
import {CSSTransition } from 'react-transition-group';
import ScrollToTop from 'react-router-scroll-top';

import Burger from './Burger';
import Menu from './Menu';
import Modal from './Modal';
import Backdrop from './Backdrop';
import GithubIcon from '../images/github-icon.svg';

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
            <ScrollToTop >
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
                                <a  href="https://github.com/astrego/demo-website" target="_blank" className="buy-button sink-on-hover">
                                    <GithubIcon className="github-icon" />
                                    <span  className="buy-button-link">Github</span>
                                </a>
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
            </ScrollToTop>    
        )
    }
}

export default Header;