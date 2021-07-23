import React from 'react';

import "./Radio.scss";

const Radio = ({ label, color, checked, onChange }) => {
    return (
        <span>
            <input 
               type="radio" 
               checked={checked}
               onChange={onChange}
               className="radio__field"
            />
            <span style={{ color }} className="radio__label">{label}</span>
        </span>
    );
};

export default Radio;
