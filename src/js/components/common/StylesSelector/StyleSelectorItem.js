import React, { Component } from 'react';
import { ColorIcon } from '../ColorIcon';
import { EditableText } from "@blueprintjs/core";
import styleEditor from '../../../StyleEditor';
import _ from 'lodash/core';

class StyleSelectorItem extends Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    componentWillMount() {
        this.setState({
            active: false,
            isNameEditable: false,
            // style: null
        });
    }

    handleMouseEnter = (e) => {
        this.setState({active: true});
    }

    handleMouseLeave = (e) => {
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
        let layer = this.props.layer,
            layerProperties = layer.getGmxProperties && layer.getGmxProperties(),
            style = this.state.style,
            styleNameClassName = this.state.isCurrent ? "gmx-style-editor-style-selector-item-name gmx-style-editor-style-selector-current-item-name" : "gmx-style-editor-style-selector-item-name",
            styleNameValue = style.Name || style.Filter,
            isNameEditable = this.state.isNameEditable,
            iconBorderStyle = {borderColor: "#" + style.RenderStyle.color},
            iconFillStyle = {backgroundColor: "#" + style.RenderStyle.fillColor};

        let styleName =
            this.state.isNameEditable ?
            <EditableText defaultValue={styleNameValue} onChange={this.setStyleName} onConfirm={this.confirmStyleName}/> :
            <span className={styleNameClassName}>
                {styleNameValue}
            </span>
        let editIcon = this.state.active ? <span className="pt-icon-standard pt-icon-edit gmx-style-editor-style-selector-icon" /> : <span></span>;

        return (
            <div className={"gmx-style-editor-style-selector-item"} key={style.Filter} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
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
