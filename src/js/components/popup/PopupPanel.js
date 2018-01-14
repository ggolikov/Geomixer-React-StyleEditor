import React, { Component } from 'react';
import { Label } from '../common/Label';
import { Input } from '../common/Input';
import { Suggestor } from '../common/Suggestor';
import { SuggestorHOC } from '../common/Suggestor/SuggestorHOC';
import { ShowPopupSettings } from './ShowPopupSettings';
import $ from 'jquery';

class PopupPanel extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        let HOC = SuggestorHOC(Suggestor);
        let popupSuggestorColumns = ['attrs'];

        const popupPanel = (
            <div key={this.props.style.Filter}>
                <Label txt={window._gtxt('Показывать')} />
                <ShowPopupSettings layer={this.props.layer} style={this.props.style} index={this.props.index} />
                <HOC
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
export { PopupPanel };
