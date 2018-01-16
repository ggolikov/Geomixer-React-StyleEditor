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
            return <StyleSelectorItem key={style.Filter} layer={layer} style={style}/>;
        });

        return (
            <div className="gmx-style-editor-style-selector">
                <StyleSelectorItem layer={layer} style={currentStyle}/>
                {stylesItems}
            </div>
        );
    }
}
export { StylesSelector };
