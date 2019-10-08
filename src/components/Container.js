import React from 'react';
import Element from './Element';
import Header from './Header';
import Modal from './Modal';
import Backdrop from './Backdrop';
import { textWithTitle } from '../data/data';
import Fade from 'react-reveal/Fade';

class Container extends React.Component {

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
        console.log("setClose()");
        this.setState(() => ({
            open: false
        }));
    };

    setOpen = () => {
        console.log("setOpen()");
        this.setState(() => ({
            open: true
        }))
    }

    closeOutside = (e) => {
        console.log("closeOutside()")
        if ((this.node) && (this.node.contains(e.target)) && (this.state.open || this.state.modalIsOpen)) {
            this.setState(() => ({
                open: false,
                modalIsOpen: false
            }));
        }  
    }

    render() {
        console.log("render()")
        return (
            
            <div  >
                <Header  open={this.state.open} setOpen={this.setOpen} setClose={this.setClose} showModal={this.showModal}/>
                <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>
                <Backdrop show={this.state.modalIsOpen} />
                <div className="main" ref={node => this.node = node}>
                    {textWithTitle.map((item, key) => (
                        <div className="block" key={key}>
                            <Element text={item.text} title={item.title} icon={item.icon}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Container;

