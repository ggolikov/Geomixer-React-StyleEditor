import React, { Component } from 'react';
import { ColorIcon } from '../ColorIcon';
import { EditableText } from "@blueprintjs/core";
import { convertColor } from '../../../utils';
import styleEditor from '../../../StyleEditor';
import _ from 'underscore';

class StyleSelectorItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            selected: false,
            isNameEditable: false
        }
    }

    onMouseEnter = (e) => {
        this.setState({active: true});
    }

    onMouseLeave = (e) => {
        this.setState({active: false});
    }

    editStyleName = () => {
        this.setState({isNameEditable: true});
    }

    setStyleName = (e) => {
        let { layer, style, index } = this.props,
            extendingStyle, newStyle;

        extendingStyle = {
            Name: e
        };

        style = _.extend(style, extendingStyle);

        styleEditor.setStyle(layer, style, index);

        this.setState({ style });
    }

    confirmStyleName = () => {
        this.setState({isNameEditable: false});
    }

    render() {
        let { layer, style, isSelected, index, isCurrent, onStyleClick } = this.props,
            { active, selected, isNameEditable } = this.state,
            layerProperties = layer.getGmxProperties && layer.getGmxProperties(),
            styleClassName = isCurrent ? "gmx-style-editor-style-selector-current-item" : "gmx-style-editor-style-selector-item",
            styleNameValue = style.Name || style.Filter,
            iconBorderStyle = {borderColor: convertColor(style.RenderStyle.color, 'hex')},
            iconFillStyle = {backgroundColor: "#" + convertColor(style.RenderStyle.fillColor, 'hex')};

        let styleName = isNameEditable ?
            <EditableText
                placeholder={"изменить название стиля"}
                defaultValue={styleNameValue}
                onChange={this.setStyleName}
                onConfirm={this.confirmStyleName} /> :
            <span className={"gmx-style-editor-style-selector-item-name"}>
                {styleNameValue}
            </span>
        let editIcon = active ? <span className="pt-icon-standard pt-icon-edit gmx-style-editor-style-selector-icon" /> : <span></span>;

        return (
            <div
                className={styleClassName}
                key={style.Filter}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                onClick={(e) => onStyleClick(e, index)}
            >
                <ColorIcon iconBorderStyle={iconBorderStyle} iconFillStyle={iconFillStyle}/>
                {styleName}
                <span onClick={this.editStyleName}>
                    {editIcon}
                </span>
            </div>
        );
    }
}
export default StyleSelectorItem;
