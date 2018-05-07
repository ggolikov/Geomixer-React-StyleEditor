import $ from 'jquery';
const applyStylesToTree = (layer) => {
    let layerProperties = layer.getGmxProperties && layer.getGmxProperties(),
        div = $(_queryMapLayers.buildedTree).find("div[LayerID='" + layerProperties.LayerID + "']")[0],
        elemProperties;

    if (div) {
        elemProperties = div.gmxProperties.content.properties;
    }

    layer._setStyle = function (style, num, createFlag) {
        layer.setStyle(style, num, createFlag);

        elemProperties.styles[num] = style;
    }
}

export default applyStylesToTree;
