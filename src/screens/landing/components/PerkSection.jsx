import React from 'react';
import Tile from './Tile';
import '../styles/PerkSectionStyles.scss';
import { PerksStatic } from '../static/LandingPageStatic';
import SectionHeader from './SectionHeader';
import Button from './Button';

const PerkSection = () => {
    return (
        <Tile containerStyle="perk-section__container">
            <SectionHeader>
                <Button text={PerksStatic.buttonText} customStyles="perk-section__button" />
            </SectionHeader>
            <div className="perk-section__content-container">
                {PerksStatic.content.map((content) => {
                    return (
                        <div className="perk-section__header-wrapper">
                            <div className="perk-section__section-header-text">
                                {content.sectionHeader}
                            </div>
                            <div style={{ backgroundColor: content.headerColor }} className="perk-section__line" />
                            <div style={{ color: content.headerColor }} className="perk-section__header-text">
                                {content.header}
                            </div>
                            <div style={{ color: content.subHeaderColor }} className="perk-section__sub-header-text">
                                {content.subHeader}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Tile>
    );
};

export default PerkSection;
