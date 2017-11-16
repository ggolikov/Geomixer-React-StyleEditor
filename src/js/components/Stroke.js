import React, { Component } from 'react';
import { ColorStylerBlock } from './ColorStylerBlock';
import $ from 'jquery';

class Stroke extends Component {
    constructor(props) {
        super(props);
        this.state = props;
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const newSyle = {
            RenderStyle: {
                weight: Number(e.target.value)
            }
        };
        const extendedStyle = $.extend(true, {}, this.state.style, newSyle);

        this.state.layer.setStyle(extendedStyle, this.state.index);
    }

    render() {
        return (
            <ColorStylerBlock
                {...this.props}
                txt={window._gtxt('Обводка')}
                onChange={this.onChange}
            / >
        );
    }
}
export { Stroke };
