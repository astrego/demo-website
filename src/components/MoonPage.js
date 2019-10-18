import React from 'react';
import Moon from '../images/moon.jpg';
import Footer from './Footer';

const backgroundSytle = {
    height: "75%",
    backgroundImage: `url(${Moon})`,
    backgroundAttachment: "fixed",
    bacgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const MoonPage = () => (
    <div className="moon-main">
        <div className="parallax" style={backgroundSytle}></div>
        <div className="moon-text-div">
            <div className="moon-text">
            “The moon does not fight. It attacks no one. 
            It does not worry. It does not try to crush others. 
            It keeps to its course, but by its very nature, 
            it gently influences. What other body could pull an 
            entire ocean from shore to shore? The moon is faithful 
            to its nature and its power is never diminished.” 
            <span>Deng Ming-Dao</span>
            </div>
        </div>
        <div className="parallax" style={backgroundSytle}></div>
        <Footer />
    </div>
);

export default MoonPage;