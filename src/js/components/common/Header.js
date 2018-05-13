import React, { Component } from 'react';
import styleEditor from '../../StyleEditor';


const Header = (props) => {
    const { layer, env } = props,
        backButtonPath = env === 'plugin' ? "plugins/styleEditorPlugin/" : "./";
    const onBackButtonClick = (e) => {
        event = document.createEvent('Event');

        event.initEvent('saveStyles', false, false);
        event.detail = { layer };

        styleEditor.dispatchEvent(event);
    }

    return (
        <div className="gmx-style-editor-header">
            <img className="gmx-style-editor-back-button" src={`${backButtonPath}css/images/back.svg`} onClick={onBackButtonClick} />
            <div>
                <span className="gmx-style-editor-top-header">{window._gtxt('Стили слоя')}</span>
                <span className="gmx-style-editor-layer-name">{props.layerName}</span>
            </div>
        </div>
    );
}

export default Header;
