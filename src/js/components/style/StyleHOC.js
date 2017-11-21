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
            newSyle;

        if (nestedParam) {
            newSyle = {
                RenderStyle: {
                    [param]: {
                        nestedParam: Number(e.target.value)
                    }
                }
            };
        } else {
            newSyle = {
                RenderStyle: {
                    [param]: Number(e.target.value)
                }
            };
        }

        // const extendedStyle = _.extend(this.props.style, newSyle);
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
