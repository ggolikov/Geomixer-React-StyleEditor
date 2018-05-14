import React, { Component } from 'react';
import { insertAtCursor } from '../../utils';
import { StyleHOC } from './StyleHOC';

class LabelEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attrs: props.attrs
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({attrs: nextProps.attrs});
    }

    onItemSelect = (e) => {
        insertAtCursor(e, 'brackets', this.textArea, 'attrs');
    }

    render() {
        let { layer, index, style, param, onChange } = this.props,
            { attrs } = this.state,
            labelSuggestorColumns = ['attrs'],
            onItemSelect = this.onItemSelect.bind(this),
            options = Object.keys(attrs).map(attribute => {
                return (
                    <option
                        key={attribute}
                    >
                        {attribute}
                    </option>
                )
            })
            console.log(attrs);

        console.log(style.RenderStyle[param]);
        console.log(param);
        return (
            <div>
                <textarea
                    ref={(textarea) => { this.textArea = textarea; }}
                    className="gmx-style-editor-input-big gmx-style-editor-right"
                    onChange={onChange}
                    defaultValue={String(style.RenderStyle[param])}
                />
                <select
                    className="gmx-style-editor-input-big gmx-style-editor-right"
                    onChange={this.onItemSelect}
                >
                    {options}
                </select>

            </div>
        )
    }
}

export default StyleHOC(LabelEditor);
