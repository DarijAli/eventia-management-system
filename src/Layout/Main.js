import React from 'react';

import NavigationBar from '../Component/Navigationbar';
import Hero from '../Component/Hero';
import EventInfo from '../Component/EventInfo';
import About from '../Component/About';
import Organizers from '../Component/Organizers';
import EventFeatures from '../Component/eventFeatures';
import Competitions from '../Component/Competitions';
import Footer from '../Component/Footer';

const Main = () => {
    return (
        <React.Fragment>
            <div id="home">
                <div class="layer">
                    <NavigationBar />
                    <div className="container">
                        <Hero />
                    </div>
                </div>
            </div>
            <div className="container">
                        <EventInfo />
                        <About />
                        <Competitions />
                        <Organizers />

                    </div>
                    <Footer />
        </React.Fragment>
    );
};

export default Main;
