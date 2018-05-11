import React, { Component } from 'react';
import Suggestor from '../common/Suggestor';
import { StyleHOC } from './StyleHOC';

class LabelEditor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { layer, index, style, param, attrs, onChange } = this.props,
            labelSuggestorColumns = ['attrs'];

        console.log(style.RenderStyle[param]);
        console.log(param);
        return (
            <div>
                <textarea className="gmx-style-editor-input-big gmx-style-editor-right" onChange={onChange} value={String(style.RenderStyle[param])} />
                <Suggestor
                    param={param}
                    layer={layer}
                    style={style}
                    index={index}
                    attrs={attrs}
                    columns={labelSuggestorColumns}
                    attrsValueWrapper={'brackets'}
                    valuesLimit={20}
                />
            </div>
        )
    }
}

export default StyleHOC(LabelEditor);
