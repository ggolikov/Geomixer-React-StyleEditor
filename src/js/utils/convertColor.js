const convertColor = (color, to) => {
    const isHex = typeof color === 'string';

    if (isHex && color.indexOf('#') === -1) color = '#'+ color;
    
    if (to === 'hex') {
        if (isHex) {
            return color;
        } else {
            return L.gmxUtil.dec2hex(color);
        }
    } else if (to === 'int') {
        if (isHex) {
            return parseInt('0x' + color.replace(/#/, ''));
        } else {
            return color;
        }
    }
}

export default convertColor;
