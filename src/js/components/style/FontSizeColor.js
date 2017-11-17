import React, { Component } from 'react';
import { ColorStylerBlock } from './ColorStylerBlock';
export const FontSizeColor = (props) => (
    <div>
        <ColorStylerBlock
            txt={props.txt}
            onChange={props.onChange}
        / >
    </div>
)
