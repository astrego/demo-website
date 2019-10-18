import React from 'react';
import Element from './Element';
import Footer from './Footer';

import { textWithTitle } from '../data/data';



// Nog te doen:
// 1: Layout Modal aanpassen, meer lezen over flex
// 2: Als je nu in de modal klikt dat verdwijnt hij, mag alleen via het kruisje of buiten de modal
// 3: Menu mobile werkt ook nog niet helemaal goed, buiten menu klikken werkt niet.
// 4: Menu voor kleine schermen nog koppelen met Navlinks
// 5: Github link in het hoofdmenu, het github svg is geen link, alleen de text ernaast
// 5: Zorgen dat alle bundle.js files in gitignore komen
// 6: Uploaden naar https://surge.sh/
// 7: Zorgen dat er altijd gerouted wordt naar index.html ook als je een verkeerd adres invoert.

class Container extends React.Component {

    render() {
        console.log("render()")
        return (
            <div>
                <div className="main" ref={node => this.node = node}>
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

