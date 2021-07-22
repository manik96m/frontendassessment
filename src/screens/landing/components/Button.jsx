import React from 'react';
import classNames from 'classnames';

import '../styles/ButtonStyles.scss';

const Button = ({ customStyles, type, text }) => {
    const buttonHover = (e) => {
        var x = e.pageX - e.target.offsetLeft;
        var y = e.pageY - e.target.offsetTop;

        e.target.style.setProperty('--x', x + 'px');
        e.target.style.setProperty('--y', y + 'px');
    }

    return (
        <button
            className={classNames("button__container", type === "HOVER_ANIMATE" ? "button__hover-animate" : null, customStyles)}
            onMouseMove={type === "HOVER_ANIMATE" ? buttonHover : null}
        >
            <span>{text}</span>
        </button>
    );
};

export default Button;
