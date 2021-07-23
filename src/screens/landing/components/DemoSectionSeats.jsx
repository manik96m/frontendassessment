import React from 'react';

import Tile from './Tile';
import '../styles/PerkSectionStyles.scss';
import { DemoSectionSeatsStatic } from '../static/LandingPageStatic';
import SectionHeader from './SectionHeader';
import Button from './Button';
import "../styles/DemoSectionSeats.scss";
import { Link } from 'react-router-dom';

const DemoSectionSeats = () => {
    return (
        <Tile containerStyle="demo-section-seats__container">
            <SectionHeader>
                <Link to="/pricing">
                    <Button text={DemoSectionSeatsStatic.buttonText} customStyles="demo-section-seats__button" type="HOVER_ANIMATE" />
                </Link>
            </SectionHeader>
            <div className="demo-section-seats__content-container">
                <div style={{ maxWidth: '437px' }}>
                    <div style={{ color: DemoSectionSeatsStatic.headerColor }} className="demo-section-seats__header-text">
                        {DemoSectionSeatsStatic.header}
                    </div>
                    <div style={{ color: DemoSectionSeatsStatic.subHeaderColor }} className="demo-section-seats__sub-header-text">
                        {DemoSectionSeatsStatic.subHeader}
                    </div>
                    <Button text={DemoSectionSeatsStatic.demoButtonText} customStyles="demo-section-seats__demo-button" />
                </div>
            </div>
        </Tile>
    );
};

export default DemoSectionSeats;
