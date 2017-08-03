import React from 'react';
import { render } from 'react-dom';
import { GmxTree } from './components/GmxTree';
import { cloneRawTree } from './cloneRawTree.js';
import { parseRawTree } from './rawTreeParser.js';

const nsGmx = window.nsGmx || {};

/**
 * res {Object} instanceof gmxMap
 */
const dataHandler = function (res) {
    let modifiedTree = cloneRawTree(res, parseRawTree);

    render(
        <GmxTree layers={modifiedTree.children}/>,
        document.querySelector('.content')
    );

}

export { dataHandler };
