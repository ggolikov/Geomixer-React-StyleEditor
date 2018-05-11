import React from 'react';
import { StyleHOC } from './StyleHOC';

const StyleSettingsBlock = (props) => (
    <div className={`gmx-style-editor-block-${props.size}`}>
        <span className={`gmx-style-editor-label-${props.size} gmx-style-editor-left`}>{props.txt}</span>
        {props.children}
    </div>
);

export default StyleHOC(StyleSettingsBlock);
