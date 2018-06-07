import React from 'react';
import { render } from 'react-dom';
import { StylesEditor } from './components/StylesEditor';
import { clearStyle } from './utils';
import styleEditor from './StyleEditor';

const nsGmx = window.nsGmx || {};

/**
 * res {Object} instanceof gmxMap
 */
const dataHandler = function (gmxMap) {

    const layer = gmxMap.layersByID['5DFD00DFD3F1454B83360166A058CF8E'], // points
    // const layer = gmxMap.layersByID['FBCEEB06FB004A2DBD568CDBDDBAFAB2'], // lines
    // const layer = gmxMap.layersByID['6963F0B5F73A4147889847555E0C0AF3'], // lines2
    // const layer = gmxMap.layersByID['63DC5EC8318744FFBA2075ED74FF456F'], // polys
        props = layer.getGmxProperties(),
        layerStyles = props.gmxStyles.styles;

        gmxMap.layers.forEach(l => {
            styleEditor.setHoverStyle(l);
        })

    // layerStyles = clearStyles(layerStyles);

    window.layer = layer;
    render(
        <StylesEditor
            layer={layer}
            geometryType = {props.GeometryType}
            styles={layerStyles} />,
        document.querySelector('.content')
    );
}

export { dataHandler };
