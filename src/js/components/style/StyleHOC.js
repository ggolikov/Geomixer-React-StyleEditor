import React, { Component } from 'react';
import _ from 'lodash';
import $ from 'jquery';

export const StyleHOC = (InnerComponent) => class extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    onChange(e) {
        let param = this.props.param,
            nestedParam = this.props.nestedParam,
            value = Number(typeof e === "number" ? e : e.target.value),
            newSyle;

        // handle array param
        if (param.match(/\//gi)) {
            let paramArray = param.split('/'),
                paramIndex = paramArray[1],
                currentLayerStyle = this.state.style.RenderStyle,
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
            newSyle = {
                RenderStyle: {
                    [param]: {
                        nestedParam: value
                    }
                }
            };
        } else {
            newSyle = {
                RenderStyle: {
                    [param]: value
                }
            };
        }

        const extendedStyle = $.extend(true, this.props.style, newSyle);

        this.state.layer.setStyle(extendedStyle, this.props.index);
    }

    render() {
        return (
            <InnerComponent
                {...this.props}
                {...this.state}
                onChange={this.onChange.bind(this)}
            />
        )
    }
}
