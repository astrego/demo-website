import React from 'react';
import Earth from '../images/earth.jpg';
import Footer from './Footer';

const backgroundSytle = {
    height: "500px",
    backgroundImage: `url(${Earth})`,
    backgroundAttachment: "fixed",
    bacgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const EarthPage = () => (
    <div className="earth-main">
    <div style={backgroundSytle}></div>
    <div className="moon-text-div">
        <div className="moon-text">
        “Look again at that dot. That's here. That's home. 
        That's us. On it everyone you love, everyone you know, 
        everyone you ever heard of, every human being who ever was, 
        lived out their lives. The aggregate of our joy and suffering, 
        thousands of confident religions, ideologies, and economic doctrines, 
        every hunter and forager, every hero and coward, every creator and 
        destroyer of civilization, every king and peasant, every young couple 
        in love, every mother and father, hopeful child, inventor and explorer, 
        every teacher of morals, every corrupt politician, every "superstar," 
        every "supreme leader," every saint and sinner in the history of our 
        species lived there-on a mote of dust suspended in a sunbeam.
        <p className="moon-text-source">Carl Sagan</p>
        </div>
    </div>
    <div className="parallax" style={backgroundSytle}></div>
        <Footer />
    </div> 
);

export default EarthPage;