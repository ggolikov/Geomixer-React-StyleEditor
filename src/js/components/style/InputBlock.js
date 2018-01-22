import React from 'react';
import { StyleHOC } from './StyleHOC';

const InputBlock = (props) => (
    <input className="gmx-style-editor-input-small " onChange={props.onChange} value={String(props.style.RenderStyle[props.param])}/>
);

export default StyleHOC(InputBlock);
