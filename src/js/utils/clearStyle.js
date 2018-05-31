const keys = {
    'Balloon': true,
    'BalloonEnable': true,
    'DisableBalloonOnClick': true,
    'DisableBalloonOnMouseMove': true,
    'Filter': true,
    'HoverStyle': true,
    'MaxZoom': true,
    'MinZoom': true,
    'Name': true,
    'RenderStyle': true
};

const clearStyle = (style) => {
    let st = {};

    for (var key in style) {
        if (style.hasOwnProperty(key)) {
            if (key in keys) {
                st[key] = style[key];
            }
        }
    }

    return st;
}

export default clearStyle;
