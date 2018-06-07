import React from 'react';
import { render } from 'react-dom';
import { StylesEditor } from './src/js/components/StylesEditor';
import styleEditor from './src/js/StyleEditor';
import { clearStyle } from './src/js/utils';
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

                        window.nsGmx.gmxMap.layers.forEach(l => {
                            styleEditor.setHoverStyle(l);
                        })

                        styleEditor.addEventListener('saveStyles', (e) => {
                            let { layer } = e.detail,
                                gmxProps = layer.getGmxProperties && layer.getGmxProperties(),
                                div = $(window._queryMapLayers.buildedTree).find("div[LayerID='" + gmxProps.name + "']")[0],
                                styles = gmxProps.gmxStyles.styles,
                                layersTreeContainer = nsGmx.layersTreePane,
                                styleEditorContainer = nsGmx.layersTreePane.parentElement.querySelector('.gmx-style-editor');

                            window._mapHelper.updateTreeStyles(styles, div, window._layersTree);

                            nsGmx.layersTreePane.parentElement.removeChild(styleEditorContainer);
                            layersTreeContainer.style.display = 'block';

                        });

                        // replace existing LayersStylesEditor function
                        nsGmx.createStylesDialog = function(treeElem, treeView, i) {
                            let layerId = treeElem.name,
                                layer = nsGmx.gmxMap.layersByID[layerId],
                                gmxProps = layer.getGmxProperties && layer.getGmxProperties(),
                                pluginContainer = document.createElement('div'),
                                layersTreeContainer = nsGmx.layersTreePane;

                            pluginContainer.className = 'gmx-style-editor';
                            layersTreeContainer.style.display = 'none';
                            nsGmx.layersTreePane.parentElement.appendChild(pluginContainer);

                            gmxProps.gmxStyles.styles = clearStyles(gmxProps.gmxStyles.styles);

                            render(
                                <StylesEditor
                                    env={'plugin'}
                                    layer={layer}
                                    styles={gmxProps.gmxStyles.styles}
                                    currentStyleIndex={i}
                                />,
                                pluginContainer
                            );
                        }

                        function clearStyles(styles) {
                            return styles.map(st => {
                                return clearStyle(st);
                            });
                        };

                        nsGmx.styleEditor = styleEditor;
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
