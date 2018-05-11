import React from 'react';
import ColorPicker from 'rc-color-picker';
import { StyleHOC } from './StyleHOC';
import styleEditor from '../../StyleEditor';
import _ from 'lodash/core';

const ColorPickerBlock = (props) => {

    const parseColor = color => parseInt('0x' + color.replace(/#/, ''));

    const onChange = (color, e) => {
        let { layer, param, style, index } = props,
            extendingStyle,
            newRenderStyle, newHoverStyle;

        extendingStyle = {
            [param]: parseColor(color.color)
        };

        if (param === 'color') {
            extendingStyle.opacity = color.alpha;
        };

        if (param === 'fillColor') {
            extendingStyle.fillOpacity = color.alpha;
        }

        newRenderStyle = _.extend(style.RenderStyle, extendingStyle);
        newHoverStyle = _.extend(style.HoverStyle, extendingStyle);
        style = _.extend(style, {
            RenderStyle: newRenderStyle,
            HoverStyle: newHoverStyle
        });

        styleEditor.setStyle(layer, style, index);
    };

    return (
        <ColorPicker
            color={`${props.style.RenderStyle[props.param]}`}
            alpha={100}
            onChange={onChange}
            // onClose={this.closeHandler}
            placement="topLeft"
            className="gmx-style-editor-color-picker-container gmx-style-editor-right"
        />
    )
};

export default StyleHOC(ColorPickerBlock);
