import React, { Component } from 'react';
import { Label } from '../common/Label';
import { Input } from '../common/Input';
import { ZoomSettings } from './ZoomSettings';
import { StyleHOC } from './StyleHOC';
import InputBlock from './InputBlock';
import ColorPickerBlock from './ColorPickerBlock';
import StyleSettingsBlock from './StyleSettingsBlock';
import SelectorBlock from './SelectorBlock';
import SliderBlock from './SliderBlock';

class StylePanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let layer = this.props.layer,
            layerProperties = layer.getGmxProperties && layer.getGmxProperties(),
            index = this.props.index,
            style = this.props.style;

        /*Labels*/
        let labelClassName = 'gmx-style-editor-label',
            smallLabelClassName = labelClassName + ' gmx-style-editor-label-small';

        const stylePanel = (
            <div key={style.Filter}>
                <Label txt={window._gtxt('Уровень зума')} className={smallLabelClassName} />
                <ZoomSettings layer={layer} style={style} />

                <Label txt={window._gtxt('Стилевое оформление')} className={labelClassName} />

                <StyleSettingsBlock txt={window._gtxt('Заливка')} >
                    <ColorPickerBlock layer={layer} style={style} param='fillColor' index={index} />
                </StyleSettingsBlock>
                <StyleSettingsBlock txt={window._gtxt('Обводка')} >
                    <InputBlock layer={layer} style={style} param='weight' index={index} />
                    <ColorPickerBlock layer={layer} style={style} param='color' index={index} />
                </StyleSettingsBlock>

                <Label txt={window._gtxt('Оформление подписи стиля')} className={labelClassName} />

                <StyleSettingsBlock txt={window._gtxt('Кегль и цвет')} >
                    <InputBlock layer={layer} style={style} param='labelFontSize' index={index} />
                    <ColorPickerBlock layer={layer} style={style} param='labelColor' index={index} />
                </StyleSettingsBlock>
                <StyleSettingsBlock txt={window._gtxt('Обводка и цвет')}>
                    <ColorPickerBlock layer={layer} style={style} param='labelHaloColor' index={index} />
                </StyleSettingsBlock>
                <SliderBlock layer={layer} style={style} param='labelAnchor/0' index={index} txt={window._gtxt('Смещение по X')} />
                <SliderBlock layer={layer} style={style} param='labelAnchor/1' index={index} txt={window._gtxt('Смещение по Y')} />
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
