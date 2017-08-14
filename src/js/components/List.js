import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import { Input } from './Input';

class StylesList extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        const layer = this.state.layer;
        const styles = this.state.styles;
        console.log(styles);
        const stylesItems = styles.map((style, index) =>
            <li key={style.Filter}>
                {style.Filter}
                <Input layer={layer} style={style} index={index}/>
            </li>
        );

        return (
            <ul>{stylesItems}</ul>
        );
    }
}
export { StylesList };
