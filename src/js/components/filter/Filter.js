import React, { Component } from 'react';
import $ from 'jquery';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = props;
        this.getInitialState = this.getInitialState.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getAttributes = this.getAttributes.bind(this);

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
        var attrs = this.getAttributes();
        console.log(attrs);
    }

    getAttributes() {
        let layerID = this.state.layer.getGmxProperties && this.state.layer.getGmxProperties().LayerID;
        let attrs = fetch(window.serverBase + "VectorLayer/GetVectorAttrValues.ashx?WrapStyle=func&LayerName=" + layerID, {mode: 'cors', credentials: 'include'})
            .then(res => res.text())
            .then(function(str){
                let attrs = JSON.parse(str.substring(1, str.length-1));
                console.log(attrs);
                this.setState({attrs : attrs});
            }.bind(this));
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
