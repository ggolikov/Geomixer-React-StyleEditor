import $ from 'jquery';
import { extend } from './utils/extend';

const nsGmx = window.nsGmx || {};

const cloneRawTree = function (tree, filterFunc) {
    filterFunc = filterFunc || function(node) {return node;};

    let res = {};

    let forEachLayerRec = function (o) {
        if (o.type == "layer") {
            return filterFunc($.extend(true, {}, o));
        }
        else if (o.type == "group") {
            let a = o.content.children,
                newChildren = [];

            for (let k = 0; k < a.length; k++) {
                let newNode = forEachLayerRec(a[k]);
                newNode && newChildren.push(newNode);
            }

            return filterFunc({
                type: 'group',
                content: {
                    children: newChildren,
                    properties: $.extend(true, {}, o.content.properties)
                }
            })
        }
    }

    let newFirstLevelGroups = [];

    for (let k = 0; k < tree.children.length; k++) {
        let newNode = forEachLayerRec(tree.children[k]);
        newNode && newFirstLevelGroups.push(newNode);
    }

    return {
        properties: $.extend(true, {}, tree.properties),
        children: newFirstLevelGroups
    }
}

export { cloneRawTree };
