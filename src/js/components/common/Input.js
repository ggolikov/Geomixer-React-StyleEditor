import React, { Component } from 'react';
import styleEditor from '../../StyleEditor';
import _ from 'underscore';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    onChange = (e) => {
        let { layer, param, style, index } = this.props,
            extendingStyle,
            newRenderStyle, newHoverStyle,
            newStyle;

        extendingStyle = {
            [param]: Number(e.target.value)
        };

        newRenderStyle = _.extend(style.RenderStyle, extendingStyle);
        newHoverStyle = _.extend(style.HoverStyle, extendingStyle);
        style = _.extend(style, {
            RenderStyle: newRenderStyle,
            HoverStyle: newHoverStyle
        });

        styleEditor.setStyle(layer, style, index);
    }

    render() {
        return (
            <input type="number" onChange={this.onChange}></input>
        );
    }
}
export { Input };
