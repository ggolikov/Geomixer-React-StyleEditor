import React, { Component } from 'react';
import { ColorIcon } from '../ColorIcon';
import { Button, Classes, Popover } from "@blueprintjs/core";
import $ from 'jquery';

class StyleSelectorHandlersPanel extends Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return (
            <div  className={`gmx-style-editor-style-selector-item`} >
                <Button className={`${Classes.POPOVER_DISMISS}`} onClick={this.props.onClose}>
                    {"Применить"}
                </Button>
                <Button className={``} onClick={this.props.onAdd}>
                    {"Добавить стиль"}
                </Button>
            </div>
        );
    }
}
export default StyleSelectorHandlersPanel;
