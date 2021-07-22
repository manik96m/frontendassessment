import React from 'react';
import { ReviewsStatic } from '../static/LandingPageStatic';

import Tile from './Tile';
import "../styles/ReviewSectionStyles.scss";
import { SmallSpeaker1, SmallSpeaker2 } from '../static/ImgUrls';

const ReviewSection = () => {
    const getStars = (stars) => {
        const starsImg = []
        for (let i = 1; i <= stars; i++) {
            starsImg.push(<img src="https://freesvg.org/img/star-15.png" height="19" width="20" alt="star" />)
        }

        return starsImg;
    };

    return (
        <Tile containerStyle="review-section__container">
            <div className="review-section__content-container">
                <div className="review-section__image-section">
                    <img src={SmallSpeaker1} alt="speaker" height="300" width="300" />
                    <img src={SmallSpeaker2} alt="speaker" height="300" width="300" className="review-section__bottom-speaker-img" />
                </div>
                {ReviewsStatic.reviews.map((content) => {
                    return (
                        <div className="review-section__header-wrapper">
                            <div className="review-section__section-header-text">
                                {content.sectionHeader}
                            </div>
                            <div className="review-section__star">
                                {getStars(content.stars)}
                            </div>
                            <div style={{ color: content.headerColor }} className="review-section__header-text">
                                {content.header}
                            </div>
                            <div style={{ color: content.subHeaderColor }} className="review-section__sub-header-text">
                                {content.comment}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Tile>
    );
};

export default ReviewSection;
