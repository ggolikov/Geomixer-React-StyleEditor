import generateStyle from './generateStyle';

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

    return style;
}

export default createDefaultStyle;
