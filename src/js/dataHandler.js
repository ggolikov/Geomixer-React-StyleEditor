import React from 'react';
import { render } from 'react-dom';
import { StylesList } from './components/List';

const nsGmx = window.nsGmx || {};

/**
 * res {Object} instanceof gmxMap
 */
const dataHandler = function (gmxMap) {

    const layer = gmxMap.layersByID['063834BB2D8B40079E26C9A83BFAB034'],
        layerStyles = layer.getStyles();

    window.layer = layer;
    render(
        <StylesList layer={layer} styles={layerStyles} />,
        document.querySelector('.content')
    );

}

export { dataHandler };
