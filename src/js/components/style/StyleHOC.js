import React, { Component } from 'react';
import $ from 'jquery';

export const StyleHOC = (InnerComponent) => class extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    onChange(e) {
        let param = this.state.param,
            nestedParam = this.state.nestedParam,
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

        const extendedStyle = $.extend(true, {}, this.state.style, newSyle);

        this.state.layer.setStyle(extendedStyle, this.state.index);
    }

    render() {
        console.log(this.props);
        return (
            <InnerComponent
                {...this.props}
                {...this.state}
                onChange={this.onChange.bind(this)}
            />
        )
    }
}
