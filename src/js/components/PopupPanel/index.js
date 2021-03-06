import React, { Component } from 'react';
import { Label } from '../common/Label';
import { Input } from '../common/Input';
import Suggestor from '../common/Suggestor';
import { ShowPopupSettings } from './ShowPopupSettings';
import './index.css';

class PopupPanel extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        let popupSuggestorColumns = ['attrs'];

        const popupPanel = (
            <div key={this.props.style.Filter}>
                <div>
                    <Label className={'gmx-style-editor-label'} txt={window._gtxt('Показывать')} />
                </div>
                <ShowPopupSettings layer={this.props.layer} style={this.props.style} index={this.props.index} />
                <Suggestor
                    param={"Balloon"}
                    layer={this.props.layer}
                    style={this.props.style}
                    index={this.props.index}
                    attrs={this.props.attrs}
                    columns={popupSuggestorColumns}
                    attrsValueWrapper={'brackets'}
                    valuesLimit={20}
                />
            </div>
        );
        return (
            <div>
                {popupPanel}
            </div>
        );
    }
}
export default PopupPanel;
