import { copy } from './copy';

function extend (target, source) {
    let dst = copy(target);
    for (let i of Object.getOwnPropertyNames (source)) {
        let value = source[i];
        if(dst.hasOwnProperty(i)){
            dst[i] = extend (dst[i], value);
        }
        else {
            dst[i] = copy(value);
        }
    }
    return dst;
}

export { extend };
