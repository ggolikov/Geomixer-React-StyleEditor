import React from 'react';
import ColorPicker from 'rc-color-picker';
import { SketchPicker } from 'react-color';
import { StyleHOC } from './StyleHOC';
import styleEditor from '../../StyleEditor';
import { convertColor } from '../../utils';
import _ from 'underscore';

class ColorPickerBlock extends React.Component {
    constructor(props){
        super(props);

        let color, alpha;

        if (props.alphaParam) {
            if (props.alphaParam in props.style.RenderStyle) {
                alpha = props.style.RenderStyle[props.alphaParam] > 1 ? props.style.RenderStyle[props.alphaParam] / 100 : props.style.RenderStyle[props.alphaParam];
            } else {
                alpha = 1;
            }
        } else {
            alpha = 1;
        }

        color = this.dec2rgba(convertColor(props.style.RenderStyle[props.param], 'int'), String(alpha));

        this.state = {
            displayColorPicker: false,
            color: color
        }
    }

    dec2rgba = (i, a) => {				// convert decimal to rgb
        let r = String((i >> 16) & 255),
            g = String((i >> 8) & 255),
            b = String(i & 255);

        return { r, g, b, a };
    }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    }

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    }

    parseColor = color => parseInt('0x' + color.replace(/#/, ''))

    onChange = (color) => {
        let { layer, param, style, index } = this.props,
            extendingStyle,
            newRenderStyle, newHoverStyle;

        extendingStyle = {
            [param]: convertColor(color.hex, 'int')
        };

        if (param === 'color') {
            extendingStyle.opacity = color.rgb.a;
        };

        if (param === 'fillColor') {
            extendingStyle.fillOpacity = color.rgb.a;
        }

        newRenderStyle = _.extend(style.RenderStyle, extendingStyle);
        newHoverStyle = _.extend(style.HoverStyle, extendingStyle);
        style = _.extend(style, {
            RenderStyle: newRenderStyle,
            HoverStyle: newHoverStyle
        });

        styleEditor.setStyle(layer, style, index);

        this.setState({ color: color.rgb });
    };

    render() {
        let panelStyle={
            backgroundColor: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`
        }

        return (
            <div className="gmx-style-editor-color-picker-container gmx-style-editor-right">
                <div
                    className="gmx-style-editor-color-picker-inner"
                    style={panelStyle}
                    onClick={ this.handleClick }
                />
                { this.state.displayColorPicker ?
                    <div className="gmx-style-editor-color-picker-popover">
                        <div className="gmx-style-editor-color-picker-cover" onClick={ this.handleClose }/>
                        <SketchPicker
                            presetColors={[]}
                            color={ this.state.color }
                            onChange={ this.onChange } />
                    </div> : null
                }
            </div>

        )
    }
};

export default ColorPickerBlock;
