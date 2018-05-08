import React from 'react';
import { render } from 'react-dom';
import { StylesEditor } from './src/js/components/StylesEditor';
import { StyleEditor } from './src/js/StyleEditor';
import './src/js/translationsHash.js';

(function () {
    'use strict';

	window.nsGmx = window.nsGmx || {};

    let pluginName = 'style-editor-plugin',
        publicInterface = {
            pluginName: pluginName,
            afterViewer: function (params, map) {
    			if (window.nsGmx) {
                    if (window.newStyles) {
                        StyleEditor.addEventListener('saveStyles', (e) => {
                            let { layer } = e.detail,
                                gmxProps = layer.getGmxProperties && layer.getGmxProperties(),
                                div = $(window._queryMapLayers.buildedTree).find("div[LayerID='" + gmxProps.name + "']")[0],
                                styles = gmxProps.gmxStyles.styles,
                                layersTreeContainer = nsGmx.layersTreePane.querySelector('.leftMenu'),
                                styleEditorContainer = nsGmx.layersTreePane.querySelector('.gmx-style-editor');

                            window._mapHelper.updateTreeStyles(styles, div, window._layersTree);

                            nsGmx.layersTreePane.removeChild(styleEditorContainer);
                            layersTreeContainer.style.display = 'block';

                        });

                        // replace existing LayersStylesEditor function
                        nsGmx.createStylesDialog = function(treeElem, treeView, i) {
                            let layerId = treeElem.name,
                                layer = nsGmx.gmxMap.layersByID[layerId],
                                gmxProps = layer.getGmxProperties && layer.getGmxProperties(),
                                pluginContainer = document.createElement('div'),
                                layersTreeContainer = nsGmx.layersTreePane.querySelector('.leftMenu');

                            pluginContainer.className = 'gmx-style-editor';
                            layersTreeContainer.style.display = 'none';
                            nsGmx.layersTreePane.appendChild(pluginContainer);

                            render(
                                <StylesEditor
                                    layer={layer}
                                    styles={gmxProps.gmxStyles.styles}
                                    currentStyleIndex={i}
                                />,
                                pluginContainer
                            );
                        }

                        nsGmx.StyleEditor = StyleEditor;
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
