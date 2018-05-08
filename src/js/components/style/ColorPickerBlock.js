import React from 'react';
import ColorPicker from 'rc-color-picker';
import { StyleHOC } from './StyleHOC';
import $ from 'jquery';

const ColorPickerBlock = (props) => {

    const parseColor = color => parseInt('0x' + color.replace(/#/, ''));

    const onChange = (color, e) => {
        let { layer, param, style, index } = props,
            extendingStyle,
            newRenderStyle, newHoverStyle,
            newStyle, copyStyle;

        extendingStyle = {
            [param]: parseColor(color.color)
        };

        if (param === 'color') {
            extendingStyle.opacity = color.alpha;
        };

        if (param === 'fillColor') {
            extendingStyle.fillOpacity = color.alpha;
        }

        newRenderStyle = $.extend(true, style.RenderStyle, extendingStyle);

        newHoverStyle = $.extend(true, style.HoverStyle, extendingStyle);

        newStyle = $.extend(true, style, {
            RenderStyle: newRenderStyle,
            HoverStyle: newHoverStyle
        });

        copyStyle = $.extend(true, style, {
            RenderStyle: newRenderStyle,
            HoverStyle: newHoverStyle
        });

        style = newStyle;
        console.log(`param: ${param}`);
        layer.setStyle(copyStyle, index);
        style = newStyle;
    };

    return (
        <ColorPicker
            color={`${props.style.RenderStyle[props.param]}`}
            // defaultColor={'#36c'}
            alpha={100}
            onChange={onChange}
            // onClose={this.closeHandler}
            placement="topLeft"
            className="gmx-style-editor-color-picker-container gmx-style-editor-right"
        />
    )
};

export default StyleHOC(ColorPickerBlock);
