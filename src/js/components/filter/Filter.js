import React, { Component } from 'react';
import { loadAttributes } from '../../utils/attrsLoader';
import $ from 'jquery';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = props;
        // this.state.attrs = {'Улица': []};
        this.getInitialState = this.getInitialState.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getInitialState();
    }

    getInitialState() {
        return {
            attrs: {
                'Улица': []
            }
        };
    }

    componentWillMount() {
        loadAttributes()
            .then(attrs => this.setState({attrs}));
    }

    onChange(e) {
        const newSyle = {
            Filter: e.value
        };
        const extendedStyle = $.extend(true, {}, this.state.style, newSyle);

        this.state.layer.setStyle(extendedStyle, this.state.index);
    }

    render() {
        console.log(this.state.attrs);
        const streets = this.state.attrs['Улица'].map(function(street) {
            return (
                <li key={street}>{street}</li>
            );
        });

        return (
            <div>
                <input type="textarea" onChange={this.onChange}></input>
                <ul>
                    {streets}
                </ul>
            </div>
        );
    }
}
export { Filter };
