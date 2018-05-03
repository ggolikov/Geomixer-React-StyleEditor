import React, { Component } from 'react';

const backButtonPath = "plugins/styleEditorPlugin/css/images/back.svg"

const onBackButtonClick = (e) => {
    let layersTreeContainer = nsGmx.layersTreePane.querySelector('.leftMenu'),
        styleEditorContainer = nsGmx.layersTreePane.querySelector('.gmx-style-editor-container');

    nsGmx.layersTreePane.removeChild(styleEditorContainer);

    layersTreeContainer.style.display = 'block';
}

export const Header = (props) => (
    <div className="gmx-style-editor-header">
        <img className="gmx-style-editor-back-button" src={backButtonPath} onClick={onBackButtonClick} />
        <div>
            <span className="gmx-style-editor-top-header">{window._gtxt('Стили слоя')}</span>
            <span className="gmx-style-editor-layer-name">{props.layerName}</span>
        </div>
    </div>
)
