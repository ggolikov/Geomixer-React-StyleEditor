import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';

class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: props.layers,
        };
    }

    render() {
        console.log(this.state);
        return (
            <div style={{ height: 800 }}>
                <SortableTree
                    treeData={this.state.treeData}
                    onChange={treeData => this.setState({ treeData })}
                    // onClick={treeData => console.log(treeData)}
                />
            </div>
        )
    }
}
export default Tree;
