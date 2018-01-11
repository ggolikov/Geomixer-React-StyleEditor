import React, { Component } from 'react';
import { Label } from '../common/Label';
import { Input } from '../common/Input';
import { Filter } from './Filter';

class FilterPanel extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        const layer = this.state.layer;
        const styles = this.state.styles;

        return (
            <div>
                <Label txt={window._gtxt('Фильтр')} />
                // <Filter layer={layer} />
            </div>
        );
    }
}
export { FilterPanel };
