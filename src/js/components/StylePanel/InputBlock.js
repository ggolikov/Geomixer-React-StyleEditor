import React from 'react';
import { StyleHOC } from './StyleHOC';

const InputBlock = (props) => {
    let { type, size, style, onChange, param, position } = props,
        value = style.RenderStyle[param] ? String(style.RenderStyle[param]) : props.defaultValue || '',
        className;

    type = type || 'number';
    size = size || 'small';
    className = position === 'left' ? `gmx-style-editor-input-${size} gmx-style-editor-input-left` : `gmx-style-editor-input-${size}`;

    return (
        <input
            type={type}
            className={className}
            onChange={onChange}
            defaultValue={value}
        />
    )
};

export default StyleHOC(InputBlock);
