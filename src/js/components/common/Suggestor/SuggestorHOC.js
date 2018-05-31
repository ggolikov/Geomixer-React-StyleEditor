import React, { Component } from 'react';
import styleEditor from '../../../StyleEditor';
import _ from 'underscore';

export const SuggestorHOC = (InnerComponent) => class extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.setState({defaultValue: this.props.style[this.props.param]})
    }

    onChange(e) {
        let { layer, param, style, index } = this.props,
            extendingStyle;

        extendingStyle = {
            [param]: e.target.value
        };

        style = _.extend(style, extendingStyle);

        styleEditor.setStyle(layer, style, index);
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
