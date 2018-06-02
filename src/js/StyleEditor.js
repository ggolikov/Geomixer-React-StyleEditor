import EventTarget from './utils/EventTarget';
import _ from 'underscore';

class StyleEditor extends EventTarget {
    constructor() {
        super();
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
        if (copyStyle.RenderStyle.common) delete copyStyle.RenderStyle.common;
        layer.setStyle(copyStyle, index, true);
    }
}

const styleEditor = new StyleEditor();

export default styleEditor;
