import React from 'react';
import Element from './Element';
import Footer from './Footer';

import { textWithTitle } from '../data/data';



// Nog te doen:
// 1: Als je nu in de modal klikt dat verdwijnt hij, mag alleen via het kruisje of buiten de modal
// 2: Als je op een menu item klikt moet hij automatisch naar boven scrollen.
// 2: zorgen dat eartpage en moonpage er een beetje goed uitzien op mobiel en bron vermelding in Italic
// 3: prop validation toevoegen
// 4: Lazy loading en auto prefic css (webpack)
// 5: Zorgen dat alle bundle.js files in gitignore komen
// 6: Uploaden naar https://surge.sh/
// 7: Zorgen dat er altijd gerouted wordt naar index.html ook als je een verkeerd adres invoert.

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

