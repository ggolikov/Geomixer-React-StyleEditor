import React, { Component } from 'react';
import { ColorIcon } from '../ColorIcon';
import { Button, Classes, Popover } from "@blueprintjs/core";
import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
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
                {/*<Button className={``} onClick={this.props.onAdd}>
                    {"Добавить стиль"}
                </Button>
                <Button className={``} onClick={this.props.onRemove}>
                    {"Удалить стиль"}
                </Button>*/}
                <Icon icon={"small-plus"} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} onClick={this.props.onAdd} />
                <Icon icon={"paperclip"} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY}  onClick={this.props.onRemove}/>

            </div>
        );
    }
}
export default StyleSelectorHandlersPanel;
