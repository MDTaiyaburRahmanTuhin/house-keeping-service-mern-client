import React from 'react';
import Navigation from '../../Sherd/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;