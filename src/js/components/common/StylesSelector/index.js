import React, { Component } from 'react';
import { StyleSelectorItem } from './StyleSelectorItem';

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
            styles = this.props.styles,
            currentStyle = styles[this.props.index];

        const stylesItems = styles.map(function (style, index) {
            let iconBorderStyle = {borderColor: "#" + style.RenderStyle.color};
            let iconFillStyle = {backgroundColor: "#" + style.RenderStyle.fillColor};

            return (
                <div key={style.Filter}>
                    {style.Filter}
                </div>
            );
        });

        return (
            <div className="gmx-style-editor-style-selector">
                <StyleSelectorItem  layer={this.props.layer} style={currentStyle}/>
            </div>
        );
    }
}
export { StylesSelector };
