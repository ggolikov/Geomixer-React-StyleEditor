import React from 'react';
import ColorPicker from 'rc-color-picker';

export const ColorPickerBlock = (props) => (
    <ColorPicker
        color={String(props.style.RenderStyle[props.param])}
        // color={'#36c'}
        alpha={30}
        onChange={props.onChange}
        // onClose={this.closeHandler}
        placement="topLeft"
        className="gmx-style-editor-color-picker-container gmx-style-editor-right"
    />
);
