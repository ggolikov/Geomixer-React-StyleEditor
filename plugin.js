import React from 'react';
import { render } from 'react-dom';
import { StylesEditor } from './src/js/components/StylesEditor';
import './src/js/translationsHash.js';

(function () {
    'use strict';

	window.nsGmx = window.nsGmx || {};

    let pluginName = 'style-editor-plugin',
        publicInterface = {
            pluginName: pluginName,
            afterViewer: function (params, map) {
    			if (window.nsGmx) {
                    // replace existing LayersStylesEditor function
                    nsGmx.createStylesDialog = function(treeElem, treeView, i) {
                        let layerId = treeElem.name,
                            layer = nsGmx.gmxMap.layersByID[layerId],
                            pluginContainer = document.createElement('div'),
                            layersTreeContainer = nsGmx.layersTreePane.querySelector('.leftMenu');

                        pluginContainer.className = 'gmx-style-editor';
                        layersTreeContainer.style.display = 'none';
                        nsGmx.layersTreePane.appendChild(pluginContainer);

                        render(
                            <StylesEditor layer={layer} styles={layer.getStyles()} currentStyleIndex={i}/>,
                            pluginContainer
                        );
                    }
                }
            }
    };

    if (window.gmxCore) {
		window.gmxCore.addModule(pluginName, publicInterface, {
			css: './css/styleEditorPlugin.css',
			init: function(module, path) {}
		});
	} else {
		window.nsGmx[pluginName] = publicInterface;
	}
})();
