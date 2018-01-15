import React, { Component } from 'react';
import { ColorIcon } from '../ColorIcon';
import { EditableText } from "@blueprintjs/core";
import { IconClasses } from "@blueprintjs/core";
import $ from 'jquery';

class StyleSelectorItem extends Component {
    constructor(props) {
        super(props);

        this.state = props;
        this.setState({
            active: false,
            isNameEditable: false
        });

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.editStyleName = this.editStyleName.bind(this);
        this.setStyleName = this.setStyleName.bind(this);
        this.confirmStyleName = this.confirmStyleName.bind(this);
    }

    handleMouseEnter(e) {
        this.setState({active: true});
    }

    handleMouseLeave(e) {
        this.setState({active: false});
    }

    editStyleName() {
        this.setState({isNameEditable: true});
    }

    setStyleName(e) {
        let newStyle = {};

        newStyle.Name = e;

        const extendedStyle = $.extend(true, this.props.style, newStyle);

        this.props.layer.setStyle(extendedStyle, this.props.index);
        this.setState({style: extendedStyle});
    }

    confirmStyleName() {
        this.setState({isNameEditable: false});
    }

    render() {
        let layer = this.props.layer,
            layerProperties = layer.getGmxProperties && layer.getGmxProperties(),
            style = this.state.style,
            styleNameValue = style.Name || style.Filter,
            isNameEditable = this.state.isNameEditable,
            iconBorderStyle = {borderColor: "#" + style.RenderStyle.color},
            iconFillStyle = {backgroundColor: "#" + style.RenderStyle.fillColor};

            console.log(this.state.isNameEditable);

        let txt = this.state.active ? "редактировать" : "";
        let styleName =
            this.state.isNameEditable ?
            <EditableText defaultValue={styleNameValue} onChange={this.setStyleName} onConfirm={this.confirmStyleName}/> :
            <span className={"gmx-style-editor-style-selector-item-name"}>
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
export { StyleSelectorItem };
