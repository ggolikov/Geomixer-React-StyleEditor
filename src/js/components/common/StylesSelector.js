import React, { Component } from 'react';
import { ColorIcon } from './ColorIcon';

class StylesSelector extends Component {
    constructor(props) {
        super(props);
        this.state = props;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.state.onChange(e);
    }

    render() {
        let layer = this.props.layer,
            layerProperties = layer.getGmxProperties && layer.getGmxProperties(),
            styles = this.props.styles;

        const stylesItems = styles.map(function (style, index) {
            let iconBorderStyle = {borderColor: "#" + style.RenderStyle.color};
            let iconFillStyle = {backgroundColor: "#" + style.RenderStyle.fillColor};

            return (
                <div key={style.Filter}>
                    <ColorIcon iconBorderStyle={iconBorderStyle} iconFillStyle={iconFillStyle}/>
                    {style.Filter}
                </div>
            );
        });

        return (
            <div className="gmx-style-editor-style-selector">
                {stylesItems}
            </div>
        );
    }
}
export { StylesSelector };
