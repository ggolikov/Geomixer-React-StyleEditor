import React, { Component } from 'react';
import $ from 'jquery';

export const SuggestorHOC = (InnerComponent) => class extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    componentWillMount() {
        this.setState({defaultValue: this.props.style[this.props.param]})
        let style = this.props.style
    }

    onChange(e) {
        let style = this.props.style,
            param = this.props.param,
            newSyle = {
                [param]: e.target.value
            };

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
