import React from 'react';
import Blog from '../Blog/Blog';
import Community from '../Community/Community';
import Contact from '../Contact/Contact';
import Featured from '../Featured/Featured';
import MainHeader from '../MainHeader/MainHeader';
import Testimonial from '../Testimonial/Testimonial';
import TopHeader from '../TopHeader/TopHeader';

const Home = () => {
    return (
        <>
            <TopHeader />
            <MainHeader />
            <Community />
            <Testimonial />
            <Blog />
            <Featured />
            <Contact/>
        </>
    );
};

export default Home;