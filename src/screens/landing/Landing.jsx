import React from 'react';
import DownloadAppSection from './components/DownloadAppSection';
import FooterSection from './components/FooterSection';
import PerkSection from './components/PerkSection';
import ReviewSection from './components/ReviewSection';
import Tile from './components/Tile';

const Landing = () => {
    return (
        <div>
            <Tile />
            <PerkSection />
            <ReviewSection />
            <DownloadAppSection />
            <FooterSection />
        </div>
    );
};

export default Landing;
