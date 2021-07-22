import React from 'react';

import "../styles/SectionHeaderStyles.scss";

const SectionHeader = ({ children }) => {
    return (
        <div className="section-header__container">
            <div></div>
            {children}
        </div>
    );
};

export default SectionHeader;
