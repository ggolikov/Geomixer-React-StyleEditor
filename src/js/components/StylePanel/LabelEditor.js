import React, { Component } from 'react';
import { insertAtCursor } from '../../utils';
import StyleSettingsBlock from './StyleSettingsBlock';
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
        if (e.target.value) {
            insertAtCursor(e, 'brackets', this.textArea, 'attrs');
        }
    }

    render() {
        let { layer, index, style, param, onChange } = this.props,
            { attrs } = this.state,
            labelSuggestorColumns = ['attrs'],
            onItemSelect = this.onItemSelect.bind(this),
            extendedAttrs = [''].concat(Object.keys(attrs)),
            options = extendedAttrs.map(attribute => {
                return (
                    <option
                        key={attribute}
                    >
                        {attribute}
                    </option>
                )
            }),
            defaultValue = style.RenderStyle[param] ? String(style.RenderStyle[param]) : '';

        return (
            <div>
                <div className={"gmx-style-editor-big gmx-style-editor-right"} >
                    <textarea
                        ref={(textarea) => { this.textArea = textarea; }}
                        onChange={onChange}
                        defaultValue={defaultValue}
                    />
                    <select
                        onChange={onItemSelect}
                        className="gmx-style-editor-right"
                    >
                        {options}
                    </select>
                </div>

            </div>
        )
    }
}

export default StyleHOC(LabelEditor);
