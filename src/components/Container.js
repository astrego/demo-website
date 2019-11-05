import React from 'react';
import Element from './Element';
import Footer from './Footer';

import { textWithTitle } from '../data/data';

// Nog te doen:
// 1: Als je nu in de modal klikt dat verdwijnt hij, mag alleen via het kruisje of buiten de modal
// 2: zorgen dat earthpage en moonpage er een beetje goed uitzien op mobiel en bron vermelding in Italic
// 3: Lazy loading en auto prefic css (webpack)
// 4: Webpack aanpassen HtmlWebpackPlugin en MiniCssExtractPlugin
// 5: Uploaden naar https://surge.sh/
// 6: Zorgen dat er altijd gerouted wordt naar index.html ook als je een verkeerd adres invoert.

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

