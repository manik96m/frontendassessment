import React from 'react';

import Tile from './Tile';
import { DownloadAppStatic } from '../static/LandingPageStatic';
import "../styles/DownloadAppSectionStyles.scss";
import Button from './Button';

const DownloadAppSection = () => {
    return (
        <Tile containerStyle="download-app__container">
            <div className="download-app__content-container">
                <div>
                    <div style={{ color: DownloadAppStatic.headerColor }} className="download-app__header-text">
                        {DownloadAppStatic.header}
                    </div>
                    <div style={{ color: DownloadAppStatic.subHeaderColor }} className="download-app__sub-header-text">
                        {DownloadAppStatic.subHeader}
                    </div>
                </div>
                <Button text={DownloadAppStatic.buttonText} type="HOVER_ANIMATE" />
            </div>
        </Tile>
    );
};

export default DownloadAppSection;
