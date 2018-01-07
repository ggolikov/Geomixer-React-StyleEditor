import React from 'react';
import ColorPicker from 'rc-color-picker';

export const ColorPickerBlock = (props) => (
    <div className="colorpicker-block gmx-style-editor-block-small">
        <span className="gmx-style-editor-label-small gmx-style-editor-left">{props.txt}</span>
        <input className="gmx-style-editor-input-small gmx-style-editor-right" onChange={props.onChange} />
        <ColorPicker
            // color={props.style.RenderStyle[props.param]}
            alpha={30}
            // onChange={this.changeHandler}
            // onClose={this.closeHandler}
            placement="topLeft"
            className="some-class"
        / >
    </div>
);
