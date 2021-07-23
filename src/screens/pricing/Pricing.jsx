import React from 'react';

import FooterSection from '../landing/components/FooterSection';
import PricingSection from './components/PricingSection';
import PerkSection from '../landing/components/PerkSection';

const Pricing = () => {
    return (
        <>
            <PricingSection />
            <PerkSection isPricing headerColor="#fff" subHeaderColor="#0B0B0B" />
            <FooterSection />
        </>
    );
};

export default Pricing;
