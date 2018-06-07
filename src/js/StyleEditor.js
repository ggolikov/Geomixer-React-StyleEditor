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
        let copyStyle;

        this.clearStyle(style);

        copyStyle = _.extend({}, style);

        if (copyStyle.HoverStyle) delete copyStyle.HoverStyle;

        layer.setStyle(copyStyle, index, true);
    }

    setHoverStyle = (layer) => {
        let props = layer.getGmxProperties && layer.getGmxProperties();

        if (props) {
            let gmxStyles = props.gmxStyles;
            if (!gmxStyles || !gmxStyles.styles) return;

            let styles = gmxStyles.styles;

            for (var i = 0; i < styles.length; i++) {
                let style = styles[i];
                style.HoverStyle = this._setHoverStyle(style);
            }

            layer.setStyles && layer.setStyles(styles);
        }
    }

    _setHoverStyle = (style) => {
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
        console.log(hoverStyle);
        return hoverStyle;
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
