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
            currentStyleIndex: 0,
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
        let layer = this.props.layer,
            layerProperties = layer.getGmxProperties && layer.getGmxProperties(),
            styles = this.props.styles,
            index = this.state.currentStyleIndex,
            style = styles[index],
            attrs = this.state.attrs;

        return (
            <div>
                <Header layerName={layerProperties.title} />
                <StylesSelector layer={layer} styles={styles} index={index} onChange={this.changeStyle}/>
                <Tabs2 id="StylesTabs">
                    <Tab2 id="style" title="Оформление" panel={<StylePanel layer={layer} style={style} index={index} attrs={attrs} />} />
                    <Tab2 id="filter" title="Фильтр" panel={<FilterPanel layer={layer} style={style} index={index} attrs={attrs} />} />
                    <Tab2 id="popup" title="Pop-up" panel={<PopupPanel layer={layer} style={style} index={index} attrs={attrs} />} />
                </Tabs2>
            </div>
        );
    }
}
export { StylesEditor };
