import React, { Component } from 'react';
import { Header } from '../common/Header';
import { Input } from '../common/Input';
import { StyleHOC } from './StyleHOC';
import { Fill } from './Fill';
import { Stroke } from './Stroke';
import { FontSizeColor } from './FontSizeColor';
import { FontStrokeColor } from './FontStrokeColor';

class StylePanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let layer = this.props.layer,
            styles = this.props.styles,
            FillHOC= StyleHOC(Fill),
            StrokeHOC = StyleHOC(Stroke),
            FontSizeColorHOC = StyleHOC(FontSizeColor),
            FontStrokeColorHOC = StyleHOC(FontStrokeColor);

        const stylesItems = styles.map((style, index) =>
            <div key={style.Filter}>
                <FillHOC            layer={layer} style={style} param='fill' index={index} txt={window._gtxt('Заливка')} />
                <StrokeHOC          layer={layer} style={style} param='weight' index={index} txt={window._gtxt('Обводка')} />
                <FontSizeColorHOC   layer={layer} style={style} param='labelFontSize' index={index} txt={window._gtxt('Кегль и цвет')} />
                <FontSizeColorHOC   layer={layer} style={style} param='labelHaloColor' index={index} txt={window._gtxt('Обводка и цвет')} />
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
