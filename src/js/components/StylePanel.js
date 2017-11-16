import React, { Component } from 'react';
import { Header } from './Header';
import { Input } from './Input';
import { Fill } from './Fill';
import { Stroke } from './Stroke';
import { FilterEditor } from './FilterEditor';
import { Tab2, Tabs2 } from "@blueprintjs/core";

class StylePanel extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <div>
                <Fill  layer={this.props.layer}/>
                <Stroke  layer={this.props.layer}/>
            </div>
        );
    }
}
export { StylePanel };
