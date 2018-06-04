import EventTarget from './utils/EventTarget';
import _ from 'underscore';

class StyleEditor extends EventTarget {
    constructor() {
        super();

        let keys = L.gmx.StyleManager.DEFAULT_STYLE_KEYS || [
            "iconUrl", "iconAngle", "iconSize", "iconScale",
            "iconMinScale", "iconMaxScale", "iconCircle", "iconCenter",
            "iconAnchor", "iconColor", "stroke", "color",
            "weight", "opacity", "dashArray", "fillColor",
            "fillOpacity", "fillIconUrl", "fillPattern", "fillRadialGradient",
            "fillLinearGradient", "labelTemplate", "labelField", "labelColor",
            "labelHaloColor", "labelFontSize", "labelSpacing", "labelAlign",
            "labelAnchor", "labelText"
        ];

        let hash = {};

        for (var i = 0; i < keys.length; i++) {
            hash[keys[i]] = true;
        }

        this.stylesHash = hash;
    }

    setStyles = (layer, styles) => {
        if (styles) {
            styles.forEach((style, i) => {
                this.setStyle(layer, style, i);
            });
        }
    }

    setStyle = (layer, style, index) => {
        let copyStyle = _.extend({}, style);

        this.clearStyle(copyStyle);
        layer.setStyle(copyStyle, index, true);
    }

    clearStyle = (style) => {
        if (style.RenderStyle) {
            this._clearStyle(style.RenderStyle);
        }

        if (style.HoverStyle) {
            this._clearStyle(style.HoverStyle);
        }
    }

    _clearStyle = (style) => {
        for (var key in style) {
            if (style.hasOwnProperty(key)) {
                if (!(key in this.stylesHash)) {
                    delete style[key];
                }
            }
        }
    }
}

const styleEditor = new StyleEditor();

export default styleEditor;
