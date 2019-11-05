import React from 'react';
import Proptypes from 'prop-types';

import Fade from 'react-reveal/Fade';

const Element = (props) => (
    <div className="container">
    {props.icon && <a href="#" className="link sink-on-hover">{props.icon}</a>}
        <div className="container-inner">
            <Fade top>
                <h1 className="title">{props.title}</h1>
            </Fade>
            <p className="paragraph">{props.text}</p>
        </div>
    </div>
);

Element.propTypes = {
    title: Proptypes.string,
    text: Proptypes.string,
    icon: Proptypes.object
}

export default Element;