import React, { Component } from 'react';
import { Label } from '../common/Label';
import { Input } from '../common/Input';
import { ZoomSettings } from './ZoomSettings';
import { StyleHOC } from './StyleHOC';
import LabelEditor from './LabelEditor';
import InputBlock from './InputBlock';
import ColorPickerBlock from './ColorPickerBlock';
import StyleSettingsBlock from './StyleSettingsBlock';
import SelectorBlock from './SelectorBlock';
import SliderBlock from './SliderBlock';
import './index.css';

class StylePanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {layer, index, style, attrs } = this.props,
            layerProperties = layer.getGmxProperties && layer.getGmxProperties(),
            labelClassName = 'gmx-style-editor-label',
            smallLabelClassName = labelClassName + ' gmx-style-editor-label-small',
            geometryType = layer.getGmxProperties().GeometryType,
            isPoint  = geometryType === 'point',
            isLine  = geometryType === 'linestring',
            fillBlock, iconUrlBlock, iconSizeBlock;

        fillBlock = !isLine ? (
            <StyleSettingsBlock size='small' txt={window._gtxt('Заливка')} >
                <ColorPickerBlock
                    layer={layer}
                    style={style}
                    param='fillColor'
                    alphaParam='fillOpacity'
                    index={index}
                />
            </StyleSettingsBlock>
        ) : null;

        iconSizeBlock = isPoint ? (
            <StyleSettingsBlock size='small' txt={window._gtxt('Размер иконки')} >
                <InputBlock
                    layer={layer}
                    style={style}
                    index={index}
                    param='iconSize'
                    size='small'
                    position='left'
                    defaultValue={12}
                />
            </StyleSettingsBlock>
        ) : null;

        iconUrlBlock = isPoint ? (
            <StyleSettingsBlock size='small' txt={window._gtxt('url иконки')} >
                <InputBlock
                    layer={layer}
                    style={style}
                    index={index}
                    param='iconUrl'
                    type='text'
                    size='big'
                />
            </StyleSettingsBlock>
        ) : null;

        let styleBlock = (
            <div key={style.Filter}>
                <Label txt={window._gtxt('Уровень зума')} className={smallLabelClassName} />
                <ZoomSettings layer={layer} style={style} />

                <Label txt={window._gtxt('Стилевое оформление')} className={labelClassName} />

                {fillBlock}

                <StyleSettingsBlock size='small' txt={window._gtxt('Обводка')} >
                    <InputBlock
                        layer={layer}
                        style={style}
                        index={index}
                        param='weight'
                        defaultValue={1}
                    />
                    <ColorPickerBlock
                        layer={layer}
                        style={style}
                        param='color'
                        alphaParam='opacity'
                        index={index}
                    />
                </StyleSettingsBlock>

                {iconUrlBlock}
                {iconSizeBlock}

                <Label txt={window._gtxt('Подпись стиля')} className={labelClassName} />
                <StyleSettingsBlock size='big' txt={window._gtxt('Текст подписи')} >
                    <LabelEditor layer={layer} style={style} param='labelTemplate' index={index} attrs={attrs} />
                </StyleSettingsBlock>

                <StyleSettingsBlock size='small' txt={window._gtxt('Кегль и цвет')} >
                    <InputBlock
                        layer={layer}
                        style={style}
                        index={index}
                        param='labelFontSize'
                        defaultValue={12}
                    />
                    <ColorPickerBlock layer={layer} style={style} param='labelColor' index={index} />
                </StyleSettingsBlock>
                <StyleSettingsBlock size='small' txt={window._gtxt('Обводка и цвет')}>
                    <ColorPickerBlock
                        layer={layer}
                        style={style}
                        param='labelHaloColor'
                        index={index}
                    />
                </StyleSettingsBlock>
                <SliderBlock layer={layer} style={style} param='labelAnchor/0' index={index} txt={window._gtxt('Смещение по X')} />
                <SliderBlock layer={layer} style={style} param='labelAnchor/1' index={index} txt={window._gtxt('Смещение по Y')} />
            </div>
        );

        return styleBlock;
    }
}
export default StylePanel;
