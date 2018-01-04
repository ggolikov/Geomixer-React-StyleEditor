import React from 'react';
import ColorPicker from 'rc-color-picker';

export const SelectorBlock = (props) => (
    <div className="selector-block">
        {props.txt}
        <input type="number" onChange={props.onChange} />
        <ColorPicker
            color={'#36c'}
            alpha={30}
            // onChange={this.changeHandler}
            // onClose={this.closeHandler}
            placement="topLeft"
            className="some-class"
        / >
    </div>
);
