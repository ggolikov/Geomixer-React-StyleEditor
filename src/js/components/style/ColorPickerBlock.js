import React from 'react';
import ColorPicker from 'rc-color-picker';
import { StyleHOC } from './StyleHOC';
import $ from 'jquery';

const ColorPickerBlock = (props) => {
    const onChange = (color, e) => {
        let { layer, param, index } = props,
            style = layer.getStyles()[index],
            newStyle = {},
            newRenderStyle = $.extend(true, style.RenderStyle, {[param]: color.color}),
            newHoverStyle = $.extend(true, style.HoverStyle, {[param]: color.color});

        newStyle = $.extend(true, style, {
            RenderStyle: newRenderStyle,
            HoverStyle: newHoverStyle
        });
        console.log(`param: ${param}`);
        layer.setStyle(newStyle, index);
    }
    console.log(`#${props.style.RenderStyle[props.param]}`);

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
