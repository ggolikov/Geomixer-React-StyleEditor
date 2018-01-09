import React, { Component } from 'react';

export const Header = (props) => (
    <div className="gmx-style-editor-header">
        <img className="gmx-style-editor-back-button" src="../css/images/back.svg" />
        <div>
            <span className="gmx-style-editor-top-header">{window._gtxt('Стили слоя')}</span>
            <span className="gmx-style-editor-layer-name">{props.layerName}</span>
        </div>
    </div>
)
