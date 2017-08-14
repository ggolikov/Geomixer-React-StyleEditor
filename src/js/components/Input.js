import React, { Component } from 'react';
import $ from 'jquery';
import SortableTree from 'react-sortable-tree';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = props;
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const newSyle = {
            RenderStyle: {
                labelFontSize: e.target.value
            }
        };
        const extendedStyle = $.extend(true, {}, this.state.style, newSyle);
        console.log(e);
        this.state.layer.setStyle(extendedStyle, this.state.index);
    }

    render() {
        return (
            <input type="text" onChange={this.onChange}></input>
        );
    }
}
export { Input };
