const generateStyle = (type) => {
    let style;

    if (type === 'point') {
        style = {
            color: 255,
            fillColor: 16777215,
            fillOpacity: 0.2,
            iconSize: 8
        };
    } else if (type === 'linestring') {
        style = {
            color: 255,
            weight: 1,
            fillColor: 16777215
        };
    } else if (type === 'polygon') {
        style = {
            color: 255,
            weight: 1,
            fillColor: 16777215,
            fillOpacity: 0.2
        };
    }

    return style;
}

export default generateStyle;
