import React from 'react'
import HeroSection from './components/heroSection/heroSection'
import WhyChooseUs from './components/whyChooseUs/whyChooseUs'
import Testimonials from './components/testimonials/testimonials'
import WhatMakeUsDifferent from './components/whatMakeUsDifferent/whatMakeUsDifferent'
import Article from './components/article/article'
import FAQS from './components/FAQ/faq'
import OurCommunity from './components/joinOurCommunity/ourCommunity'

const Home = () => {

    return (
        <div className='grid md:gap-28 gap-10 ' >
            <HeroSection/>
            <WhyChooseUs/>
            <Testimonials/>
            <WhatMakeUsDifferent/>
            <Article/>
            <FAQS/>
            <OurCommunity/>
          </div>
    )
}

export default Home