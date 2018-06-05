const generateStyle = (type) => {
    let style;

    if (type === 'point') {
        style = {
            color: 255,
            fillColor: 16777215,
            fillOpacity: 0.2,
            iconSize: 8
        };

    } else {
        style = {
            color: 255,
            fillColor: 16777215
        };
    }

    return style;
}

export default generateStyle;
