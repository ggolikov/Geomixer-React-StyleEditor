import React, { Component } from 'react';
import { Header } from '../common/Header';
import { Input } from '../common/Input';
import { StyleHOC } from './StyleHOC';
import { Fill } from './Fill';
import { Stroke } from './Stroke';
import { FontSizeColor } from './FontSizeColor';
import $ from 'jquery';

class StylePanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let FillHOC= StyleHOC(Fill),
            StrokeHOC = StyleHOC(FontSizeColor),
            FontSizeColorHOC = StyleHOC(Stroke);

        return (
            <div>
                <FillHOC layer={this.props.layer} param='fill' txt={window._gtxt('Заливка')} />
                <StrokeHOC layer={this.props.layer} param='weight' txt={window._gtxt('Обводка')} />
                <FontSizeColorHOC layer={this.props.layer} param='labelFontSize' txt={window._gtxt('Кегль и цвет')} />
            </div>
        );
    }
}
export { StylePanel };
