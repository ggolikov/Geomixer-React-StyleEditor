import React, { Component } from 'react';
import { Header } from '../common/Header';
import { Input } from '../common/Input';
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
            styles = this.props.styles;

        let ColorPickerHOC = StyleHOC(ColorPickerBlock);
        let SelectorHOC = StyleHOC(SelectorBlock);
        let SliderHOC = StyleHOC(SliderBlock);

        /*Headers*/
        let headerClassName = 'gmx-style-editor-header',
            smallHeaderClassName = headerClassName + ' gmx-style-editor-header-small';

        const stylesItems = styles.map((style, index) =>
            <div key={style.Filter}>
                <Header txt={window._gtxt('Уровень зума')} className={smallHeaderClassName}/>
                <ZoomSettings layer={layer} style={style} />

                <Header txt={window._gtxt('Стилевое оформление')} className={headerClassName} />
                <ColorPickerHOC layer={layer} style={style} param='fillColor' index={index} txt={window._gtxt('Заливка')} />
                <ColorPickerHOC layer={layer} style={style} param='weight' index={index} txt={window._gtxt('Обводка')} />

                <Header txt={window._gtxt('Оформление подписи стиля')} className={headerClassName} />
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
