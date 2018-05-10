import React, { Component } from 'react';
import { ColorIcon } from '../ColorIcon';

const CurrentStyle = (props) => {
    let { style, onClick } = props,
        styleNameClassName = "gmx-style-editor-style-selector-item-name",
        iconBorderStyle = {borderColor: "#" + style.RenderStyle.color},
        iconFillStyle = {backgroundColor: "#" + style.RenderStyle.fillColor},
        styleNameValue = style.Name || style.Filter,
        styleName = (
            <span className={styleNameClassName}>
                {styleNameValue}
            </span>
        );

    return (
        <div className={"gmx-style-editor-style-selector"} onClick={onClick}>
            <ColorIcon iconBorderStyle={iconBorderStyle} iconFillStyle={iconFillStyle}/>
            {styleName}
        </div>
    );
}

export default CurrentStyle;
