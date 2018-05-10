import React, { Component } from 'react';
import { ColorIcon } from '../ColorIcon';
import { Button } from "@blueprintjs/core";
import $ from 'jquery';

class StyleSelectorHandlersPanel extends Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return (
            <div className={"gmx-style-editor-style-selector-item"} >
                <Button onClick={this.props.onClick}>
                    {"Применить"}
                </Button>
            </div>
        );
    }
}
export default StyleSelectorHandlersPanel;
