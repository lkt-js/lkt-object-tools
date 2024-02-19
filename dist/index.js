export const cloneObject = (obj) => {
    if (typeof obj === 'object') {
        return { ...obj };
        // return Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
    }
    return {};
};
export const sortObjectProperties = (obj) => {
    const r = {};
    const keys = Object.keys(obj).sort();
    keys.forEach(key => {
        r[key] = obj[key];
    });
    return r;
};
export const fetchInObject = (obj, key, separator = '.') => {
    const args = key.split(separator);
    const argsLength = args.length;
    let c = 0;
    let t = obj;
    // Parse config data and fetch attribute
    while (typeof t[args[c]] !== 'undefined') {
        t = t[args[c]];
        ++c;
    }
    // If not found...
    if (c < argsLength) {
        return undefined;
    }
    return t;
};
export const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};
export const mergeCommonProperties = (obj1, obj2) => {
    const keys1 = Object.keys(obj1), keys2 = Object.keys(obj2), keys = keys1.filter((value) => keys2.includes(value));
    const r = {};
    keys.forEach((z) => {
        return (r[z] = obj2[z] ?? obj1[z]);
    });
    return r;
};
export const deleteObjectProperties = (obj, keys) => {
    const objKeys = Object.keys(obj);
    keys.forEach((key) => {
        if (objKeys.includes(key)) {
            delete obj[key];
        }
    });
    return obj;
};
