import React, { Component } from 'react';
import { Label } from '../common/Label';
import { Filter } from './Filter';
import { Suggestor } from '../common/Suggestor';
import { SuggestorHOC } from '../common/Suggestor/SuggestorHOC';

class FilterPanel extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        let HOC = SuggestorHOC(Suggestor);
        let popupSuggestorColumns = ['attrs', 'operators', 'values'];

        const filterItems = this.props.styles.map((style, index) =>
            <div key={style.Filter}>
                <HOC
                    param={"Filter"}
                    layer={this.props.layer}
                    style={style}
                    index={index}
                    attrs={this.props.attrs}
                    columns={popupSuggestorColumns}
                    attrsValueWrapper={'quotes'}
                    valuesLimit={20}
                />
            </div>
        );

        return (
            <div>
                {filterItems}
            </div>
        );
    }
}
export { FilterPanel };
