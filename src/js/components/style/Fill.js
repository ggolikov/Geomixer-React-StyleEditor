import React, { Component } from 'react';
import { ColorStylerBlock } from './ColorStylerBlock';

export const Fill = (props) => (
    <div>
        <ColorStylerBlock
            color={props.style.Renderstyle[props.param]}
            txt={props.txt}
            onChange={props.onChange}
        / >
    </div>
)
