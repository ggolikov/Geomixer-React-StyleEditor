import React from 'react';

export const InputBlock = (props) => (
    <input className="gmx-style-editor-input-small " onChange={props.onChange} value={String(props.style.RenderStyle[props.param])}/>
);
