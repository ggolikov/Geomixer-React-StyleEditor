import React, { Component } from 'react';
import styleEditor from '../../StyleEditor';
import _ from 'lodash/core';

export const StyleHOC = (InnerComponent) => class extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    onChange = (e) => {
        let { layer, style, index, attrs, param, nestedParam }  = this.props,
            value,
            extendingStyle,
            newRenderStyle, newHoverStyle,
            newStyle;

        if (typeof e === "number") {
            value = e;
        } else if (e.target) {
            value = Number(e.target.value);
        } else {
            value = e.color;
        }

        // handle array param
        if (param.match(/\//gi)) {
            let paramArray = param.split('/'),
                paramIndex = paramArray[1],
                currentLayerStyle = style.RenderStyle,
                currentLabelAnchorStyle, newlabelAnchorStyle;

            if ('labelAnchor' in currentLayerStyle && Array.isArray(currentLayerStyle.labelAnchor)) {
                currentLabelAnchorStyle = currentLayerStyle.labelAnchor;
            } else if ('marker' in currentLayerStyle && typeof currentLayerStyle.marker === "object") {
                currentLabelAnchorStyle = [currentLayerStyle.marker.dx, currentLayerStyle.marker.dy];
            } else {
                currentLabelAnchorStyle = [0, 0];
            }

            newlabelAnchorStyle = [
                ...currentLabelAnchorStyle.slice(0, paramIndex),
                value,
                ...currentLabelAnchorStyle.slice(paramIndex + 1)
            ];

            param = paramArray[0];
            value = newlabelAnchorStyle;
        }

        if (nestedParam) {
            extendingStyle = {
                [param]: {
                    nestedParam: value
                }
            };
        } else {
            extendingStyle = {
                [param]: value
            };
        }

        newRenderStyle = _.extend(style.RenderStyle, extendingStyle);
        newHoverStyle = _.extend(style.HoverStyle, extendingStyle);
        newStyle = {
            RenderStyle: newRenderStyle,
            HoverStyle: newHoverStyle
        };

        style = _.extend(style, newStyle);

        this.setState({ style });

        styleEditor.setStyle(layer, style, index);
    }

    render() {
        return (
            <InnerComponent
                {...this.props}
                {...this.state}
                onChange={this.onChange}
            />
        )
    }
}
