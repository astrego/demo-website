import React from 'react';
import Element from './Element';
import Header from './Header';
import { animateList, textWithTitle } from '../data/data';

class Container extends React.Component {

    state = {
        open: false
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.closeOutside, false);
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
        // console.log(e.target);
        if (this.node.contains(e.target)) {
            this.setState(() => ({
                open: false
            }));
        }  
    }

    render() {
        return (
            
            <div>
                <Header open={this.state.open} setOpen={this.setOpen} setClose={this.setClose} />
                <div ref={node => this.node = node} className="main">
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

