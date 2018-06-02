import React, { Component } from 'react';
import { ColorIcon } from '../ColorIcon';
import { Button, Classes, Popover } from "@blueprintjs/core";
import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import $ from 'jquery';

class StyleSelectorHandlersPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let oneStyleLeft = this.props.styles.length === 1,
            deleteIconClassName = this.props.itemCurrent ? 'gmx-style-editor-icon' : 'gmx-style-editor-icon-disabled',
            color = !this.props.itemCurrent ? '#999' : null,
            deleteIcon = !oneStyleLeft ? (
                <Icon
                    icon={"trash"}
                    color={color}
                    title="удалить стиль"
                    className={deleteIconClassName}
                    iconSize={Icon.SIZE_LARGE}
                    intent={Intent.PRIMARY}
                    onClick={this.props.onRemove}
                />) : null;

        return (
            <div className={`gmx-style-editor-handler-panel`} >
                <Button
                    disabled={!this.props.itemCurrent}
                    className={`${Classes.POPOVER_DISMISS}`}
                    onClick={this.props.onClose}>
                    {"Применить"}
                </Button>
                <Icon
                    icon={"small-plus"}
                    title="добавить стиль"
                    className={'gmx-style-editor-icon'}
                    iconSize={Icon.SIZE_LARGE}
                    intent={Intent.PRIMARY}
                    onClick={this.props.onAdd}
                />
                {deleteIcon}
            </div>
        );
    }
}
export default StyleSelectorHandlersPanel;
