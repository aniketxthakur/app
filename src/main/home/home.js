import React from 'react'
import Cards from '../components/card/workCard/cards';
import NewsCard from '../components/card/newsCards/newsCard';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HealthcareSolutions from '../components/healthcareSolution/healthcareSolutions';
import Comment from '../components/comments/comment';
import RecentTrails from '../components/recentTrail/recentTrails';
import WhatWeDo from '../components/whatWeDo/whatWeDo';
import AllRecord from '../components/records/record';

const Home = () => {

    return (
        <div className='mt-20'>
            <AllRecord />
            <WhatWeDo />
            <RecentTrails />
            <Comment />
            <HealthcareSolutions />
            <Cards />
            <NewsCard />
        </div>
    )
}

export default Home