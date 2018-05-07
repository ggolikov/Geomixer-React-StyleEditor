import React, { Component } from 'react';

const backButtonPath = "plugins/styleEditorPlugin/css/images/back.svg"



export const Header = (props) => {
    const onBackButtonClick = (e) => {
        let { layer, treeElem, treeView } = props,
            div = $(window._queryMapLayers.buildedTree).find("div[LayerID='" + treeElem.LayerID + "']")[0],
            styles = layer.getStyles(),
            layersTreeContainer = nsGmx.layersTreePane.querySelector('.leftMenu'),
            styleEditorContainer = nsGmx.layersTreePane.querySelector('.gmx-style-editor');

        window._mapHelper.updateTreeStyles(styles, div, treeView);

        nsGmx.layersTreePane.removeChild(styleEditorContainer);

        layersTreeContainer.style.display = 'block';
    }

    return (
        <div className="gmx-style-editor-header">
            <img className="gmx-style-editor-back-button" src={backButtonPath} onClick={onBackButtonClick} />
            <div>
                <span className="gmx-style-editor-top-header">{window._gtxt('Стили слоя')}</span>
                <span className="gmx-style-editor-layer-name">{props.layerName}</span>
            </div>
        </div>
    );
}
