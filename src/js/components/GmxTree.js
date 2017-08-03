import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
// import { Classes, ITreeNode, Tooltip, Tree } from "@blueprintjs/core";
// import 'antd';
// import { Tree } from 'antd';
// const TreeNode = Tree.TreeNode;
import Tree, { TreeNode } from 'rc-tree';

class GmxTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: props.layers,
            innerStyle: {
                padding: 'none'
            },
            rowHeight: 45
        };
    }

    render() {
        return (
            <div style={{ height: 800 }}>
                <SortableTree
                    treeData={this.state.treeData}
                    innerStyle={this.state.innerStyle}
                    rowHeight={this.state.rowHeight}
                    onChange={treeData => this.setState({ treeData })}>
                </SortableTree>
            </div>
        )
    }
}
export { GmxTree };
