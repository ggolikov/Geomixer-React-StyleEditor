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
                    let pluginContainer = window.iconSidebarWidget.setPane(
                        "style-editor-plugin", {
                            createTab: window.createTabFunction({
                                icon: "s-forest-plugin",
                                active: "sidebar-icon-active",
                                inactive: "sidebar-icon-inactive",
                                hint: "style-editor"
                            })
                        }
                    ),
                    layerId = params.layerId || '05D50D053F8A495BB3F59A9AEFE976B8',
                    layer = nsGmx.gmxMap.layersByID[layerId];

                    render(
                        <StylesEditor layer={layer} styles={layer.getStyles()} />,
                        pluginContainer
                    );
                }
            }
    };

    if (window.gmxCore) {
		window.gmxCore.addModule(pluginName, publicInterface, {
			css: './plugins/styleEditorPlugin/styleEditorPlugin.css',
			init: function(module, path) {}
		});
	} else {
		window.nsGmx[pluginName] = publicInterface;
	}
})();
