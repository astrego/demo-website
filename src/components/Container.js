import React from 'react';
import Element from './Element';
import Footer from './Footer';

import { textWithTitle } from '../data/data';



// Nog te doen:
// 1: Als je nu in de modal klikt dat verdwijnt hij, mag alleen via het kruisje of buiten de modal
// 2: Github link in het hoofdmenu, het github svg is geen link, alleen de text ernaast
// 3: Lazy loading
// 4: Zorgen dat alle bundle.js files in gitignore komen
// 5: Uploaden naar https://surge.sh/
// 6: Zorgen dat er altijd gerouted wordt naar index.html ook als je een verkeerd adres invoert.

class Container extends React.Component {

    render() {
        console.log("render()")
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

