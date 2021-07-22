import React from 'react';

import Tile from './Tile';
import '../styles/DemoSectionAudio.scss';
import { DemoSectionAudioStatic } from '../static/LandingPageStatic';
import SectionHeader from './SectionHeader';
import Button from './Button';
import { SpeakerMedium1, SpeakerMedium2 } from '../static/ImgUrls';

const DemoSectionAudio = () => {
    return (
        <Tile containerStyle="demo-section-audio__container">
            <SectionHeader>
                <Button text={DemoSectionAudioStatic.buttonText} customStyles="demo-section-audio__button" />
            </SectionHeader>
            <div className="demo-section-audio__content-container">
                <div className="demo-section-audio__header-wrapper">
                    <div style={{ color: DemoSectionAudioStatic.headerColor }} className="demo-section-audio__header-text">
                        {DemoSectionAudioStatic.header}
                    </div>
                    <div style={{ color: DemoSectionAudioStatic.subHeaderColor }} className="demo-section-audio__sub-header-text">
                        {DemoSectionAudioStatic.subHeader}
                    </div>
                    <Button text={DemoSectionAudioStatic.demoButtonText} customStyles="demo-section-audio__demo-button" />
                </div>
                <div className="demo-section-audio__image-section">
                    <img src={SpeakerMedium1} alt="speaker" height="300" width="200" className="demo-section-audio__top-speaker-img" />
                    <img src={SpeakerMedium2} alt="speaker" height="300" width="200" className="demo-section-audio__bottom-speaker-img" />
                </div>
            </div>
        </Tile>
    );
};

export default DemoSectionAudio;
