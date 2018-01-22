import React from 'react';
import { StyleHOC } from './StyleHOC';

const StyleSettingsBlock = (props) => (
    <div className="gmx-style-editor-block-small">
        <span className="gmx-style-editor-label-small gmx-style-editor-left">{props.txt}</span>
        {props.children}
    </div>
);

export default StyleHOC(StyleSettingsBlock);
