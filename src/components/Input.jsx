import classNames from 'classnames';
import React, { useState } from 'react';

import './Input.scss';

const Input = ({ label }) => {
    const [isFocused, updateIsFocused] = useState(false);

    const onFieldFocus = () => {
        updateIsFocused(true);
    };

    const onFieldBlur = () => {
        updateIsFocused(false);
    };

    return (
        <div>
            <div className="input__label">{label}</div>
            <input 
                className={classNames("input__field", isFocused && "input__field-focused")} 
                onFocus={onFieldFocus} 
                onBlur={onFieldBlur} 
            />
        </div>
    );
};

export default Input;
