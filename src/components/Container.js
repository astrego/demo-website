import React from 'react';
import Element from './Element';
import Footer from './Footer';

import { textWithTitle } from '../data/data';

class Container extends React.Component {

    render() {
        return (
            <div>
                <div className="main">
                    {textWithTitle.map((item, key) => (
                        <div className="block" key={key}>
                            <Element text={item.text} title={item.title} icon={item.icon}/>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Container;

