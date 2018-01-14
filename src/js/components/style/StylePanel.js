import React, { Component } from 'react';
import { Label } from '../common/Label';
import { Input } from '../common/Input';
import { StyleSettingsBlock } from './StyleSettingsBlock';
import { InputBlock } from './InputBlock';
import { ColorPickerBlock } from './ColorPickerBlock';
import { ZoomSettings } from './ZoomSettings';
import { SelectorBlock } from './SelectorBlock';
import { SliderBlock } from './SliderBlock';
import { StyleHOC } from './StyleHOC';

class StylePanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let layer = this.props.layer,
            layerProperties = layer.getGmxProperties && layer.getGmxProperties(),
            index = this.props.index,
            style = this.props.style;

        let ColorPickerHOC = StyleHOC(ColorPickerBlock);
        let InputHOC = StyleHOC(InputBlock);
        let SelectorHOC = StyleHOC(SelectorBlock);
        let SliderHOC = StyleHOC(SliderBlock);
        console.log(style);
        /*Labels*/
        let labelClassName = 'gmx-style-editor-label',
            smallLabelClassName = labelClassName + ' gmx-style-editor-label-small';

        const stylePanel = (
            <div key={style.Filter}>
                <Label txt={window._gtxt('Уровень зума')} className={smallLabelClassName} />
                <ZoomSettings layer={layer} style={style} />

                <Label txt={window._gtxt('Стилевое оформление')} className={labelClassName} />

                <StyleSettingsBlock txt={window._gtxt('Заливка')} >
                    <ColorPickerHOC layer={layer} style={style} param='fillColor' index={index} />
                </StyleSettingsBlock>
                <StyleSettingsBlock txt={window._gtxt('Обводка')} >
                    <InputHOC layer={layer} style={style} param='weight' index={index} />
                    <ColorPickerHOC layer={layer} style={style} param='color' index={index} />
                </StyleSettingsBlock>

                <Label txt={window._gtxt('Оформление подписи стиля')} className={labelClassName} />

                <StyleSettingsBlock txt={window._gtxt('Кегль и цвет')} >
                    <InputHOC layer={layer} style={style} param='labelFontSize' index={index} />
                    <ColorPickerHOC layer={layer} style={style} param='labelColor' index={index} />
                </StyleSettingsBlock>
                <StyleSettingsBlock txt={window._gtxt('Обводка и цвет')}>
                    <ColorPickerHOC layer={layer} style={style} param='labelHaloColor' index={index} />
                </StyleSettingsBlock>
                <SliderHOC layer={layer} style={style} param='labelAnchor/0' index={index} txt={window._gtxt('Смещение по X')} />
                <SliderHOC layer={layer} style={style} param='labelAnchor/1' index={index} txt={window._gtxt('Смещение по Y')} />
            </div>
        );

        return (
            <div>
                {stylePanel}
            </div>
        );
    }
}
export { StylePanel };
