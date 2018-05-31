import React from 'react';
import { render } from 'react-dom';
import { StylesEditor } from './components/StylesEditor';
import { clearStyle } from './utils';

const nsGmx = window.nsGmx || {};

/**
 * res {Object} instanceof gmxMap
 */
const dataHandler = function (gmxMap) {

    const layer = gmxMap.layersByID['05D50D053F8A495BB3F59A9AEFE976B8'],
        props = layer.getGmxProperties(),
        layerStyles = props.gmxStyles.styles;

    // layerStyles = clearStyles(layerStyles);

    window.layer = layer;
    render(
        <StylesEditor layer={layer} styles={layerStyles} />,
        document.querySelector('.content')
    );
}

export { dataHandler };
