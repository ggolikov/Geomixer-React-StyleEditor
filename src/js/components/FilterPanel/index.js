import React, { Component } from 'react';
import { Label } from '../common/Label';
import { Filter } from './Filter';
import Suggestor from '../common/Suggestor';
import './index.css';

class FilterPanel extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        let popupSuggestorColumns = ['attrs', 'operators', 'values'];

        const filterPanel = (
            <div key={this.props.style.Filter}>
                <Suggestor
                    param={"Filter"}
                    layer={this.props.layer}
                    style={this.props.style}
                    index={this.props.index}
                    attrs={this.props.attrs}
                    columns={popupSuggestorColumns}
                    attrsValueWrapper={'quotes'}
                    valuesLimit={20}
                />
            </div>
        );

        return (
            <div>
                {filterPanel}
            </div>
        );
    }
}
export default FilterPanel;
