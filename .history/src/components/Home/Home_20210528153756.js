import React from 'react';
import Blog from '../Blog/Blog';
import Community from '../Community/Community';
import Contact from '../Contact/Contact';
import Events from '../Events/Events';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';
import MainContent from '../MainContent/MainContent';
import MainHeader from '../MainHeader/MainHeader';
import Testimonial from '../Testimonial/Testimonial';
import TopHeader from '../TopHeader/TopHeader';

const Home = () => {
    return (
        <>
            <TopHeader />
            <MainHeader />
            <MainContent/>
            <Community />
            <Testimonial />
            <Blog />
            <Featured />
            <Events/>
            <Contact />
            <Footer/>
        </>
    );
};

export default Home;