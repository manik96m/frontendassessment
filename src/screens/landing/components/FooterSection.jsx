import React from 'react';

import Tile from './Tile';
import { FooterStatic } from '../static/LandingPageStatic';
import "../styles/FooterSectionStyles.scss";

const FooterSection = () => {
    return (
        <Tile containerStyle="footer__container">
            <div style={{ color: FooterStatic.color }} className="footer__content-container">
                <div className="footer__email">
                    <img src="https://freesvg.org/img/Minduka-mail.png" alt="speaker" height="30" width="30" />
                    <span className="footer__email-text">{FooterStatic.email}</span>
                </div>
                <div>
                    <div style={{ color: FooterStatic.color }} className="footer__header-text">
                        {FooterStatic.header}
                    </div>
                    <div style={{ color: FooterStatic.color }} className="footer__copyright-text">
                        {FooterStatic.copyrightText}
                    </div>
                </div>
            </div>
        </Tile>
    );
};

export default FooterSection;
