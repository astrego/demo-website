import React from 'react';
import {CSSTransition } from 'react-transition-group';
import ScrollToTop from 'react-router-scroll-top';

import Burger from './Burger';
import Menu from './Menu';
import Navbar from './Navbar';
import Modal from './Modal';
import Backdrop from './Backdrop';


class Header extends React.Component {

    state = {
        open: false,
        modalIsOpen: false
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.closeOutside, false);
        document.addEventListener('mousedown', this.modalCloseOutside, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.closeOutside, false);
        document.removeEventListener('mousedown', this.modalCloseOutside, false);
    }

    showModal = () => {
        this.setState({modalIsOpen: true});
      }
    
    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    setClose = () => {
        this.setState(() => ({open: false}));
    };

    setOpen = () => {
        this.setState(() => ({open: true}))
    }

    closeOutside = (e) => {
        if ((this.node) && (!this.node.contains(e.target)) && (this.state.open)) {
            this.setState(() => ({
                open: false,
                modalIsOpen: false,
            }));
        }
    }

    modalCloseOutside = (e) => {
        if ((this.modalNode) && (!this.modalNode.contains(e.target)) && (this.state.modalIsOpen)) {
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
                    <Navbar click={this.showModal}/>
                </div>
                <div ref={modalNode => this.modalNode = modalNode}>
                    <CSSTransition
                        in={this.state.modalIsOpen}
                        timeout={500}
                        unmountOnExit
                        classNames="modal">
                        <Modal closed={this.closeModal} />
                    </CSSTransition>
                </div>
                <CSSTransition
                    in={this.state.modalIsOpen}
                    timeout={500}
                    unmountOnExit
                    classNames="backdrop">
                    <Backdrop />
                </CSSTransition>
            </ScrollToTop>    
        )
    }
}

export default Header;