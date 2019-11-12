import React from 'react';
import Element from './Element';
import Footer from './Footer';

import { textWithTitle } from '../data/data';

// Nog te doen:
// 1: Als je nu in de modal klikt dat verdwijnt hij, mag alleen via het kruisje of buiten de modal
// 2: Een slankere en moderne font vinden
// 3: Uploaden naar https://surge.sh/
// 4: Zorgen dat er altijd gerouted wordt naar index.html ook als je een verkeerd adres invoert.

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

