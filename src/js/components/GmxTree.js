import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
// import { Classes, ITreeNode, Tooltip, Tree } from "@blueprintjs/core";
import 'antd';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

class GmxTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: props.layers
        };
    }

    render() {
        console.log(this.state.treeData);

        const calculateKey = data => data.map((item) => {

        }

        const loop = data => data.map((item) => {
            if (item.children && item.children.length) {
                return <TreeNode type={item.type} title={item.title} key={item.key}/* isLeaf={item.isLeaf}*/>{loop(item.children)}</TreeNode>;
            }
            return <TreeNode type={item.type} title={item.title} key={item.key}/* isLeaf={item.isLeaf}*/></TreeNode>;
        });


        return (
            <div style={{ height: 800 }}>
                <Tree
                    className="draggable-tree"
                    draggable
                >
                    {loop(this.state.treeData)}
                </Tree>
            </div>
        )
    }
}
export { GmxTree };
