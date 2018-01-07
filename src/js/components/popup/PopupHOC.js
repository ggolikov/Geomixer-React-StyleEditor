import React, { Component } from 'react';
import $ from 'jquery';

export const PopupHOC = (InnerComponent) => class extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    onChange(e) {
        let style = this.state.style,
            newSyle;

        if (typeof style.BalloonEnable === 'undefined')
        {
            style.BalloonEnable = true;
            style.DisableBalloonOnClick = false;
            style.DisableBalloonOnMouseMove = true;
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
