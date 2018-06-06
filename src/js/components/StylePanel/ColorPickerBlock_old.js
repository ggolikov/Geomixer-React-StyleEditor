import React from 'react';
import ColorPicker from 'rc-color-picker';
import { StyleHOC } from './StyleHOC';
import styleEditor from '../../StyleEditor';
import { convertColor } from '../../utils';
import _ from 'underscore';

const ColorPickerBlock = (props) => {

    const parseColor = color => parseInt('0x' + color.replace(/#/, ''));
    const hexColor = convertColor(props.style.RenderStyle[props.param], 'hex');

    let alpha;

    if (props.alphaParam) {
        if (props.alphaParam in props.style.RenderStyle) {
            alpha = props.style.RenderStyle[props.alphaParam] > 1 ? props.style.RenderStyle[props.alphaParam] : props.style.RenderStyle[props.alphaParam] * 100;
        } else {
            alpha = 100;
        }
    } else {
        alpha = 100;
    }

    const onChange = (color, e) => {
        let { layer, param, style, index } = props,
            extendingStyle,
            newRenderStyle, newHoverStyle;

        extendingStyle = {
            [param]: convertColor(color.color, 'int')
        };

        if (param === 'color') {
            extendingStyle.opacity = color.alpha / 100;
        };

        if (param === 'fillColor') {
            extendingStyle.fillOpacity = color.alpha / 100;
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
            defaultColor={hexColor}
            color={hexColor}
            alpha={alpha}
            onChange={onChange}
            // onClose={this.closeHandler}
            placement="topLeft"
            className="gmx-style-editor-color-picker-container gmx-style-editor-right"
        />
    )
};

export default StyleHOC(ColorPickerBlock);
