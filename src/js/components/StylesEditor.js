import React, { Component } from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import { createDefaultStyle, applyStylesToTree, loadAttrValues } from '../utils';
import Header from './common/Header';
import StylesSelector from './common/StylesSelector';
import FilterPanel from './FilterPanel';
import StylePanel from './StylePanel';
import PopupPanel from './PopupPanel';
import styleEditor from '../StyleEditor';

class StylesEditor extends Component {
    constructor(props) {
        super(props);

        var _this = this;

        this.state = {
            currentStyleIndex: props.currentStyleIndex,
            styles: props.layer.getStyles(),
            attrs: []
        };
    }

    componentWillMount() {
        const { layer, currentStyleIndex } = this.props,
            gmxProps = layer.getGmxProperties && layer.getGmxProperties(),
            layerID = gmxProps.LayerID;

        if (currentStyleIndex) {
            this.setState({ currentStyleIndex })
        } else {
            this.setState({currentStyleIndex: 0})
        }

        loadAttrValues(layerID)
            .then(data => this.setState({attrs: data.Result}));
    }

    replaceStyle = (oldStyle, newStyle) => {
        while (oldStyle.length) {
            oldStyle.pop();
        }

        for (var i = 0; i < newStyle.length; i++) {
            oldStyle.push(newStyle[i]);
        }
    }

    changeStyle = (e, data) => {
        let { layer, styles } = this.props,
            { type } = data,
            layerStyles;

        if (type === 'changeCurrent') {
            let { index } = data;
            console.log('changed current');
            this.setState({ currentStyleIndex: index });
        } else if (type === 'addStyle') {
            // styles = layer.getStyles();
            console.log('было');
            console.log(styles.length);

            styles.push(createDefaultStyle());
            console.log('стало');
            console.log(styles.length);
            layer.setStyles(styles);
            // styleEditor.setStyles(layer, styles);
            // console.log(layer.getStyles());
            this.setState({
                currentStyleIndex: styles.length - 1 >= 0 ? styles.length - 1 : 0
             });
        } else if (type === 'removeStyle') {
            let { index } = data;
            console.log('было');
            console.log(styles.length);

            styles.splice(index, 1);
            console.log('стало');
            console.log(styles.length);
            layer.setStyles(styles);
            // styleEditor.setStyles(layer, styles);.
            this.setState({
                currentStyleIndex: 0
             });
        }
    }

    render() {
        let { layer, styles, env } = this.props,
            { currentStyleIndex, attrs } = this.state,
            layerProperties = layer.getGmxProperties && layer.getGmxProperties(),
            style = styles[currentStyleIndex];

        return (
            <div>
                <Header
                    layer={layer}
                    layerName={layerProperties.title}
                    env={env}
                />
                <StylesSelector layer={layer} styles={styles} index={currentStyleIndex} onChange={this.changeStyle}/>
                <Tabs id="StylesTabs">
                    <Tab id="style" title="Оформление" panel={<StylePanel layer={layer} style={style} index={currentStyleIndex} attrs={attrs} />} />
                    <Tab id="filter" title="Фильтр" panel={<FilterPanel layer={layer} style={style} index={currentStyleIndex} attrs={attrs} />} />
                    <Tab id="popup" title="Pop-up" panel={<PopupPanel layer={layer} style={style} index={currentStyleIndex} attrs={attrs} />} />
                </Tabs>}
            </div>
        );
    }
}
export { StylesEditor };
