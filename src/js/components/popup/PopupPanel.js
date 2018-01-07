import React, { Component } from 'react';
import { Header } from '../common/Header';
import { Input } from '../common/Input';
import { ShowPopupSettings } from './ShowPopupSettings';
import { PopupHOC } from './PopupHOC';

class PopupPanel extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        let layer = this.props.layer,
            styles = this.props.styles;

        let PopupTypeHOC = PopupHOC(ShowPopupSettings);

        const popupItems = styles.map((style, index) =>
            <div key={style.Filter}>
                {window._gtxt('Показывать')};
                <ShowPopupSettings layer={layer} style={style} index={index} />
            </div>
        );
        return (
            <div>
                {popupItems}
            </div>
        );
    }
}
export { PopupPanel };
