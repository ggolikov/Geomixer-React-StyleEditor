import 'leaflet';
import React from 'react';
import { render } from 'react-dom';
import Tree from './components/Tree';


// require('./lib/IconSidebarControl/dist/iconSidebarControl.css');
// window.nsGmx = window.nsGmx || {};
// window.nsGmx.IconSidebarControl = require('./lib/IconSidebarControl/dist/iconSidebarControl.js');

import { json } from './data/mapdata.js';
console.log(json);


const titles = json.children.map(function (l) {
    return ({title: l.content.properties.title});
});

json.children.forEach(function (node) {
    return visitTree(node, iterator);
});

const titles2 = json.children.forEach(function (node) {
    return visitTree(node, iterator);
});

// console.log(titles);
console.log(titles2);

function visitTree (o, fn) {
    if (o.type === 'group') {
        o.content.children.forEach((n) => visitTree(n, fn))
    } else {
        fn(o);
    }
}

function iterator(node) {
    console.log({title: node.content.properties.title, type: node.type});
    // return {title: node.content.properties.title};
}

render(
    <Tree layers={titles}/>,
    document.querySelector('.content')
);
