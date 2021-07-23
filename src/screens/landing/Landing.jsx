import React from 'react';
import DemoSectionAudio from './components/DemoSectionAudio';
import DemoSectionSeats from './components/DemoSectionSeats';
import DownloadAppSection from './components/DownloadAppSection';
import HeroSection from './components/HeroSection';
import FooterSection from './components/FooterSection';
import PerkSection from './components/PerkSection';
import ReviewSection from './components/ReviewSection';

const Landing = () => {
    return (
        <>
            <HeroSection />
            <DemoSectionAudio />
            <DemoSectionSeats />
            <PerkSection />
            <ReviewSection />
            <DownloadAppSection />
            <FooterSection />
        </>
    );
};

export default Landing;
