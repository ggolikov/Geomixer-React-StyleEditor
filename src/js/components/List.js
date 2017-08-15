import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import { Input } from './Input';
import { FilterEditor } from './FilterEditor';

class StylesList extends Component {
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
            <div>{stylesItems}</div>
        );
    }
}
export { StylesList };
