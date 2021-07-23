import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Tile from './Tile';
import '../styles/DemoSectionAudio.scss';
import { DemoSectionAudioStatic } from '../static/LandingPageStatic';
import SectionHeader from './SectionHeader';
import Button from './Button';
import { audio, SpeakerMedium1, SpeakerMedium2 } from '../static/ImgUrls';

const DemoSectionAudio = () => {
    const [audioContext, updateAudioContext] = useState(null);
    const [audioBuffer, updateAudioBuffer] = useState(null);
    const [audioSource, updateAudioSource] = useState(null);
    const [isPlaying, updateIsPlaying] = useState(false);

    useEffect(() => {
        initAudioContext();
    }, []);

    const initAudioContext = async () => {
        const newAudioContext = new AudioContext();
        const audioBuffer = await fetch(audio)
            .then(res => res.arrayBuffer())
            .then(ArrayBuffer => newAudioContext.decodeAudioData(ArrayBuffer));
        updateAudioBuffer(audioBuffer);
        updateAudioContext(newAudioContext);
    };

    const playSound = () => {
        if (!audioContext) return;
        if (isPlaying) {
            if (!audioSource.stop)
                audioSource.stop = audioSource.notePause;
            audioSource.stop(0);
            updateIsPlaying(false);
        } else {
            var source = audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(audioContext.destination);
            source.start(0);
            updateAudioSource(source);
            updateIsPlaying(true);
        }
    }

    return (
        <Tile containerStyle="demo-section-audio__container">
            <SectionHeader>
                <Link to="/pricing">
                  <Button text={DemoSectionAudioStatic.buttonText} customStyles="demo-section-audio__button" type="HOVER_ANIMATE" />
                </Link>
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
                    <img src={SpeakerMedium1} alt="speaker" height="300" width="200" className="demo-section-audio__top-speaker-img" onClick={playSound} />
                    <img src={SpeakerMedium2} alt="speaker" height="300" width="200" className="demo-section-audio__bottom-speaker-img" />
                </div>
            </div>
        </Tile>
    );
};

export default DemoSectionAudio;
