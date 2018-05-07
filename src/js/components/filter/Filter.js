import React, { Component } from 'react';
// import { loadAttrValues } from '../utils/attrValuesLoader';
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
        let gmxProps = this.props.layer.getGmxProperties && this.props.layer.getGmxProperties(),
            layerID = gmxProps.LayerID;

        // loadAttributes(layerID)
        //     .then(data => this.setState({attrs: data.Result}));
    }

    onChange(e) {
        console.log(this.state.attrs);
        const newSyle = {
            Filter: e.value
        };
        const extendedStyle = $.extend(true, {}, this.state.style, newSyle);

        this.state.layer.setStyle(extendedStyle, this.state.index);
    }

    render() {

        this.state.attrs && console.log(this.state.attrs);
        const streets = this.state.attrs ? this.state.attrs['Улица'].map(function(street) {
            return (
                <li key={street}>{street}</li>
            );
        }) : <li></li>;

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
