import React, { Component } from 'react';
import { Header } from '../common/Header';
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
        const stylesItems = styles.map((style, index) =>
            <div key={style.Filter}>
                <div>
                    {style.Filter}
                </div>
                <div>
                    <Input layer={layer} style={style} index={index}/>
                </div>
                <div>
                    <Filter layer={layer} style={style} index={index}/>
                </div>
            </div>
        );

        return (
            <div>
                <Header txt={window._gtxt('Уровень зума')} />
                {stylesItems}
            </div>
        );
    }
}
export { FilterPanel };
