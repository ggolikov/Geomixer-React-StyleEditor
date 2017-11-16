import React, { Component } from 'react';
import { Header } from './Header';
import { Input } from './Input';
import { ColorStylerBlock } from './ColorStylerBlock';
import { FilterEditor } from './FilterEditor';
import { Tab2, Tabs2 } from "@blueprintjs/core";

class FilterPanel extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        const layer = this.state.layer;
        const styles = this.state.styles;
        console.log(styles);
        // <FilterEditor layer={layer} style={style} index={index}/>
        const stylesItems = styles.map((style, index) =>
            <div key={style.Filter}>
                <div>
                    {style.Filter}
                </div>
                <div>
                    <Input layer={layer} style={style} index={index}/>
                </div>
                <div>
                    <FilterEditor layer={layer} style={style} index={index}/>
                </div>
            </div>
        );

        return (
            <div>
                <Header txt={window._gtxt('Уровень зума')} />
                {stylesItems}
                <ColorStylerBlock txt={window._gtxt('Уровень зума')} />
            </div>
        );
    }
}
export { FilterPanel };
