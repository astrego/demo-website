import React from 'react';
import Moon from '../images/moon.jpg';
import Footer from './Footer';

const backgroundStyle = {

    backgroundImage: `url(${Moon})`,
    backgroundRepeat: "no-repeat",
}

const MoonPage = () => (
    <div className="moon-main">
        <div className="moon-text-div" style={backgroundStyle}>
            <div className="moon-text">
            “The moon does not fight. It attacks no one. 
            It does not worry. It does not try to crush others. 
            It keeps to its course, but by its very nature, 
            it gently influences. What other body could pull an 
            entire ocean from shore to shore? The moon is faithful 
            to its nature and its power is never diminished.” 
            <p className="moon-text-source">Deng Ming-Dao</p>
            </div>
            </div>
        <Footer />
    </div>
);

export default MoonPage;