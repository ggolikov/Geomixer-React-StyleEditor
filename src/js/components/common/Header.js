import React, { Component } from 'react';
import styleEditor from '../../StyleEditor';

const backButtonPath = "plugins/styleEditorPlugin/css/images/bac0``k.svg";

export const Header = (props) => {
    const onBackButtonClick = (e) => {
        let { layer } = props,
            event = document.createEvent('Event');

        event.initEvent('saveStyles', false, false);
        event.detail = { layer };

        styleEditor.dispatchEvent(event);
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
