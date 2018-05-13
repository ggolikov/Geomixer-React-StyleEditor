import React, { Component } from 'react';
import { Select } from "@blueprintjs/select";
import { insertAtCursor } from '../../utils';
import { StyleHOC } from './StyleHOC';

class LabelEditor extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        debugger;
        console.log(nextProps);
    }

    onItemSelect = (e) => {
        insertAtCursor(e, 'brackets', this.textArea);
    }

    render() {
        let { layer, index, style, param, attrs, onChange } = this.props,
            labelSuggestorColumns = ['attrs'],
            onItemSelect = this.onItemSelect.bind(this),
            options = null;
    /*        options = Object.keys(attrs).map(a => {
                return (
                    <option key={a} onClick={onItemSelect}>
                        a
                    </option>
                )
            })*/
            console.log(attrs);

        console.log(style.RenderStyle[param]);
        console.log(param);
        return (
            <div>
                <textarea
                    ref={(textarea) => { this.textArea = textarea; }}
                    className="gmx-style-editor-input-big gmx-style-editor-right"
                    onChange={onChange}
                    value={String(style.RenderStyle[param])}
                />
                <select className="gmx-style-editor-input-big gmx-style-editor-right">
                    {options}
                </select>

            </div>
        )
    }
}

export default StyleHOC(LabelEditor);
