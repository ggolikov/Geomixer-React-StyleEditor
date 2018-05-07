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
        const { layer, styles, index } = this.props,
            layerProperties = layer.getGmxProperties && layer.getGmxProperties(),
            currentStyle = styles[index];

        const stylesItems = styles.map(function (style, index) {
            var isCurrent = style === currentStyle;
            console.log(isCurrent);
            return <StyleSelectorItem key={style.Filter} layer={layer} style={style} index={index} isCurrent={isCurrent} />;
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
