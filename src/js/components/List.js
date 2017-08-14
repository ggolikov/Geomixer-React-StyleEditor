import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';

class StylesList extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        const styles = this.state.styles;
        console.log(styles);
        const stylesItems = styles.map((style) =>
            <li key={style.Filter}>
                {style.Filter}
            </li>
        );

        return (
            <ul>{stylesItems}</ul>
        );
    }
}
export { StylesList };
