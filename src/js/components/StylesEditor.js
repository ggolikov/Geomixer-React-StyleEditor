import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import { Input } from './Input';
import { StyleFilter } from './StyleFilter';
import { Tab2, Tabs2 } from "@blueprintjs/core";

class StylesEditor extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <Tabs2 id="StylesTabs">
                <Tab2 id="style" title="Оформление" panel={<StyleFilter layer={this.state.layer} styles={this.state.styles}/>} />
                <Tab2 id="filter" title="Фильтр" panel={<StyleFilter layer={this.state.layer} styles={this.state.styles}/>} />
                <Tab2 id="popup" title="Pop-up" panel={<StyleFilter layer={this.state.layer} styles={this.state.styles}/>} />
            </Tabs2>
        );
    }
}
export { StylesEditor };
