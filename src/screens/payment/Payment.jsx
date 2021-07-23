import React from 'react';
import FooterSection from '../landing/components/FooterSection';
import PaymentForm from './components/PaymentForm';

const Payment = ({ location }) => (
        <div>
            <PaymentForm location={location}/>
            <FooterSection />
        </div>
);

export default Payment;
