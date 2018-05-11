import EventTarget from './utils/EventTarget';
import _ from 'lodash/core';

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
        layer.setStyle(copyStyle, index, true);
    }
}

const styleEditor = new StyleEditor();

export default styleEditor;
