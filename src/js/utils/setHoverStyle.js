const setHoverStyle = (style) => {
    let renderStyle = style.RenderStyle,
        hoverStyle = {};

    if (renderStyle) {

        for (var key in renderStyle) {
            if (renderStyle.hasOwnProperty(key)) {
                hoverStyle[key] = renderStyle[key];
            }

            if (key === 'weight') {
                if (renderStyle[key] < 2) {
                    hoverStyle[key] = 2;
                } else {
                    hoverStyle[key] = renderStyle[key] + 1;
                }
            }
        }
    }
    return hoverStyle;
}

export default setHoverStyle;
