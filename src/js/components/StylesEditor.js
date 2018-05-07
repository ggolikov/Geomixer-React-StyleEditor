import React, { Component } from 'react';
import { loadAttrValues } from '../utils/attrValuesLoader';
import { Header } from './common/Header';
import { StylesSelector } from './common/StylesSelector';
import { FilterPanel } from './filter/FilterPanel';
import { StylePanel } from './style/StylePanel';
import { PopupPanel } from './popup/PopupPanel';
import { Tab, Tabs } from "@blueprintjs/core";

class StylesEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStyleIndex: props.currentStyleIndex,
            attrs: []
        };

        this.changeStyle = this.changeStyle.bind(this);
    }

    componentWillMount() {
        let gmxProps = this.props.layer.getGmxProperties && this.props.layer.getGmxProperties(),
            layerID = gmxProps.LayerID;

        if (this.props.currentStyleIndex) {
            this.setState({currentStyleIndex: this.props.currentStyleIndex})
        } else {
            this.setState({currentStyleIndex: 0})
        }

        loadAttrValues(layerID)
            .then(data => this.setState({attrs: data.Result}));
    }

    changeStyle(e) {
        let index = Number(e.target.getAttribute('data-index'));

        this.setState({currentStyleIndex: index});
    }

    render() {
        let {layer, styles} = this.props,
            {currentStyleIndex, attrs} = this.state,
            layerProperties = layer.getGmxProperties && layer.getGmxProperties(),
            style = styles[currentStyleIndex];

        return (
            <div>
                <Header layerName={layerProperties.title} />
                <StylesSelector layer={layer} styles={styles} index={currentStyleIndex} onChange={this.changeStyle}/>
                <Tabs id="StylesTabs">
                    <Tab id="style" title="Оформление" panel={<StylePanel layer={layer} style={style} index={currentStyleIndex} attrs={attrs} />} />
                    <Tab id="filter" title="Фильтр" panel={<FilterPanel layer={layer} style={style} index={currentStyleIndex} attrs={attrs} />} />
                    <Tab id="popup" title="Pop-up" panel={<PopupPanel layer={layer} style={style} index={currentStyleIndex} attrs={attrs} />} />
                </Tabs>*/}
            </div>
        );
    }
}
export { StylesEditor };
