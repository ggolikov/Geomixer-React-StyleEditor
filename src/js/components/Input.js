import React, { Component } from 'react';
import $ from 'jquery';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = props;
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const newSyle = {
            RenderStyle: {
                labelFontSize: Number(e.target.value)
            }
        };
        const extendedStyle = $.extend(true, {}, this.state.style, newSyle);

        this.state.layer.setStyle(extendedStyle, this.state.index);
    }

    render() {
        return (
            <input type="text" onChange={this.onChange}></input>
        );
    }
}
export { Input };
