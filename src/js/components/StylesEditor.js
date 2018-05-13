import React, { Component } from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import { applyStylesToTree, loadAttrValues } from '../utils';
import Header from './common/Header';
import StylesSelector from './common/StylesSelector';
import FilterPanel from './FilterPanel';
import StylePanel from './StylePanel';
import PopupPanel from './PopupPanel';

class StylesEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStyleIndex: props.currentStyleIndex,
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

    changeStyle = (e, data) => {
        let { currentStyleIndex } = data;
        console.log('changed');

        this.setState({ currentStyleIndex });
    }

    render() {
        let { layer, styles, env } = this.props,
            {currentStyleIndex, attrs} = this.state,
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
