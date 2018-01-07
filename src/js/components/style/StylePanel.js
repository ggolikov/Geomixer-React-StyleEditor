import React, { Component } from 'react';
import { Header } from '../common/Header';
import { Input } from '../common/Input';
import { ColorPickerBlock } from './ColorPickerBlock';
import { SelectorBlock } from './SelectorBlock';
import { SliderBlock } from './SliderBlock';
import { StyleHOC } from './StyleHOC';

class StylePanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let layer = this.props.layer,
            styles = this.props.styles;

        let ColorPickerHOC = StyleHOC(ColorPickerBlock);
        let SliderHOC = StyleHOC(SliderBlock);

        const stylesItems = styles.map((style, index) =>
            <div key={style.Filter}>
                <ColorPickerHOC layer={layer} style={style} param='fillColor' index={index} txt={window._gtxt('Заливка')} />
                <ColorPickerHOC layer={layer} style={style} param='weight' index={index} txt={window._gtxt('Обводка')} />
                <ColorPickerHOC layer={layer} style={style} param='labelFontSize' index={index} txt={window._gtxt('Кегль и цвет')} />
                <ColorPickerHOC layer={layer} style={style} param='labelHaloColor' index={index} txt={window._gtxt('Обводка и цвет')} />
                <SliderHOC layer={layer} style={style} param='labelAnchor/0' index={index} txt={window._gtxt('Смещение по X')} />
                <SliderHOC layer={layer} style={style} param='labelAnchor/1' index={index} txt={window._gtxt('Смещение по Y')} />
            </div>
        );

        return (
            <div>
                {stylesItems}
            </div>
        );
    }
}
export { StylePanel };
