import generateStyle from './generateStyle';
import setHoverStyle from './setHoverStyle';

const createDefaultStyle = (type) => {
    let renderStyle = generateStyle(type);

    let style = {
        Balloon: '',
        BalloonEnable: true,
        DisableBalloonOnClick: true,
        DisableBalloonOnMouseMove: true,
        Filter: '',
        MaxZoom: 21,
        MinZoom: 1,
        Name: '',
        RenderStyle: renderStyle
    };

    style.HoverStyle = setHoverStyle(style);

    return style;
}

export default createDefaultStyle;
