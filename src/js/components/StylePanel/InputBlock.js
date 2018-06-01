import React from 'react';
import { StyleHOC } from './StyleHOC';

const InputBlock = (props) => {
    let { type, size, style, onChange, param } = props,
        value = style.RenderStyle[param] ? String(style.RenderStyle[param]) : '';

    type = type || 'number';
    size = size || 'small';

    return (
        <input
            type={type}
            className={`gmx-style-editor-input-${size}`}
            onChange={onChange}
            defaultValue={value}
        />
    )
};

export default StyleHOC(InputBlock);
