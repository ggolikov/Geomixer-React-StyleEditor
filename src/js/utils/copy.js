function copy (source) {
    switch(typeof source) {
        case 'number':
        case 'string':
        case 'function':
        default:
            return source;
        case 'object':
            let dst = Object.create(Object.getPrototypeOf(source));
            for (let i of Object.getOwnPropertyNames(source)) {
                const value = source[i];
                Object.defineProperty(dst, i, {
                    writable: true,
                    value: (typeof value === 'object' ? copy (value) : value)
                });
            }
            return dst;
    }
}

export { copy };
