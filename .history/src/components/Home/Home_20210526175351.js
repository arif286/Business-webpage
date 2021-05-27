import React from 'react';
import Community from '../Community/Community';
import MainHeader from '../MainHeader/MainHeader';
import TopHeader from '../TopHeader/TopHeader';

const Home = () => {
    return (
        <>
            <TopHeader />
            <MainHeader />
            <Community/>
        </>
    );
};

export default Home;