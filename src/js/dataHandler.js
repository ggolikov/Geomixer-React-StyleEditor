import React from 'react';
import { render } from 'react-dom';
import { StylesEditor } from './components/StylesEditor';

const nsGmx = window.nsGmx || {};

/**
 * res {Object} instanceof gmxMap
 */
const dataHandler = function (gmxMap) {

    const layer = gmxMap.layersByID['05D50D053F8A495BB3F59A9AEFE976B8'],
        layerStyles = layer.getStyles();

    window.layer = layer;
    render(
        <StylesEditor layer={layer} styles={layerStyles} />,
        document.querySelector('.content')
    );

}

export { dataHandler };
