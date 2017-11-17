import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import { Input } from './common/Input';
import { FilterPanel } from './filter/FilterPanel';
import { StylePanel } from './style/StylePanel';
import { PopupPanel } from './popup/PopupPanel';
import { Tab2, Tabs2 } from "@blueprintjs/core";

class StylesEditor extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <Tabs2 id="StylesTabs">
                <Tab2 id="style" title="Оформление" panel={<StylePanel layer={this.state.layer} styles={this.state.styles}/>} />
                <Tab2 id="filter" title="Фильтр" panel={<FilterPanel layer={this.state.layer} styles={this.state.styles}/>} />
                <Tab2 id="popup" title="Pop-up" panel={<PopupPanel layer={this.state.layer} styles={this.state.styles}/>} />
            </Tabs2>
        );
    }
}
export { StylesEditor };
