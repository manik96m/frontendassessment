import React from 'react';

import Tile from '../../landing/components/Tile';
import '../styles/PricingSection.scss';
import PricingPageStatic from '../static/PricingPageStatic';
import SectionHeader from '../../landing/components/SectionHeader';
import Button from '../../landing/components/Button';

const PricingSection = () => {
    return (
        <Tile containerStyle="pricing__container">
            <div></div>
            <div>
                
            <SectionHeader />
            <div className="pricing__section-heading">{PricingPageStatic.sectionHeading}</div>
            <div className="pricing__section-desc">{PricingPageStatic.sectionDesc}</div>
            <div className="pricing__content-container">
                {PricingPageStatic.content.map((content) => {
                    return (
                        <div className="pricing__header-wrapper" key={content.id}>
                            <div style={{ color: content.headerColor }} className="pricing__header-text">
                                {content.sectionHeader}
                            </div>
                            <div style={{ backgroundColor: content.headerColor }} className="pricing__line" />
                            <div style={{ color: content.headerColor }} className="pricing__header-text">
                                {content.header}
                            </div>
                            <div style={{ color: content.headerColor }} className="pricing__price">
                                {content.price}
                            </div>
                            <div style={{ color: content.subHeaderColor }} className="pricing__sub-header-text">
                                {content.subHeader}
                            </div>
                            {
                                content.features.map((feature, index) => {
                                    return <div className="pricing__feature" key={"feature" + index}>♪ {feature}</div>;
                                })
                            }
                            <Button text={PricingPageStatic.buttonText} customStyles="pricing__button" />
                        </div>
                    );
                })}
            </div>


            </div>
            
        </Tile>
    );
};

export default PricingSection;
