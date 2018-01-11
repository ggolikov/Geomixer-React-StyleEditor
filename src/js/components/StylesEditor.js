import React, { Component } from 'react';
import { loadAttrValues } from '../utils/attrValuesLoader';
import { Header } from './common/Header';
import { StylesSelector } from './common/StylesSelector';
import { FilterPanel } from './filter/FilterPanel';
import { StylePanel } from './style/StylePanel';
import { PopupPanel } from './popup/PopupPanel';
import { Tab2, Tabs2 } from "@blueprintjs/core";

class StylesEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attrs: []
        };
    }

    componentWillMount() {
        let gmxProps = this.props.layer.getGmxProperties && this.props.layer.getGmxProperties(),
            layerID = gmxProps.LayerID;

        loadAttrValues(layerID)
            .then(data => this.setState({attrs: data.Result}));
    }

    render() {
        let layer = this.props.layer,
            layerProperties = layer.getGmxProperties && layer.getGmxProperties(),
            styles = this.props.styles,
            attrs = this.state.attrs;

        return (
            <div>
                <Header layerName={layerProperties.title} />
                <StylesSelector layer={layer} styles={styles} />
                <Tabs2 id="StylesTabs">
                    <Tab2 id="style" title="Оформление" panel={<StylePanel layer={layer} styles={styles} attrs={attrs} />} />
                    <Tab2 id="filter" title="Фильтр" panel={<FilterPanel layer={layer} styles={styles} attrs={attrs} />} />
                    <Tab2 id="popup" title="Pop-up" panel={<PopupPanel layer={layer} styles={styles} attrs={attrs} />} />
                </Tabs2>
            </div>
        );
    }
}
export { StylesEditor };
