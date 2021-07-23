import React from 'react';

import Tile from './Tile';
import '../styles/PerkSectionStyles.scss';
import { PerksStatic } from '../static/LandingPageStatic';
import SectionHeader from './SectionHeader';
import Button from './Button';
import { Link } from 'react-router-dom';

const PerkSection = ({ isPricing, headerColor, subHeaderColor}) => {
    return (
        <Tile containerStyle={isPricing ? "perk-section__container-pricing" : "perk-section__container"}>
            <SectionHeader>
                {!isPricing && (
                    <Link to="/pricing">
                        <Button text={PerksStatic.buttonText} customStyles="perk-section__button" type="HOVER_ANIMATE" />
                    </Link>
                )
                }
            </SectionHeader>
            <div className="perk-section__content-container">
                {PerksStatic.content.map((content) => {
                    return (
                        <div className="perk-section__header-wrapper" key={content.id}>
                            <div className="perk-section__section-header-text">
                                {content.sectionHeader}
                            </div>
                            <div style={{ backgroundColor: headerColor || content.headerColor }} className="perk-section__line" />
                            <div style={{ color: headerColor || content.headerColor }} className="perk-section__header-text">
                                {content.header}
                            </div>
                            <div style={{ color: subHeaderColor || content.subHeaderColor }} className="perk-section__sub-header-text">
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
