import React, { Component } from 'react';
import { ColorIcon } from '../ColorIcon';
import { convertColor } from '../../../utils';

class CurrentStyle extends Component {
    constructor(props) {
        // let _this = this;
        super(props);

        this.state = {
            style: props.style
        };

        props.layer.on('stylechange', e => {
            let style = e.target.getGmxProperties().gmxStyles.styles[e.num];

            this.setState({ style })
        });
    }

    componentWillReceiveProps() {

    }

    render() {
        let { layer, onClick } = this.props,
            { style } = this.state,
            layerProperties = layer.getGmxProperties && layer.getGmxProperties(),
            geometryType = layerProperties.GeometryType,
            styleNameClassName = "gmx-style-editor-style-selector-item-name",
            iconBorderStyle = {borderColor: "#" + convertColor(style.RenderStyle.color, 'hex')},
            lineIconStyle = {backgroundColor: "#" + convertColor(style.RenderStyle.color, 'hex')},
            iconFillStyle = {backgroundColor: "#" + convertColor(style.RenderStyle.fillColor, 'hex')},
            styleNameValue = style.Name || style.Filter,
            styleName = (
                <span className={styleNameClassName}>
                    {styleNameValue}
                </span>
            );

        return (
            <div className={"gmx-style-editor-style-selector"} onClick={onClick}>
                <ColorIcon
                    iconBorderStyle={iconBorderStyle}
                    lineIconStyle={lineIconStyle}
                    iconFillStyle={iconFillStyle}
                    geometryType={geometryType}
                />
                {styleName}
            </div>
        );
    }

}

export default CurrentStyle;
