import React from 'react';
import ColorPicker from 'rc-color-picker';

export const ColorPickerBlock = (props) => (
    <div className="colorpicker-block">
        {props.txt}
        <input type="number" onChange={props.onChange} />
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
