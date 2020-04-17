module.exports = formData => {
    if (!(formData instanceof FormData)) throw new TypeError('Expected FormData, got ' + (typeof formData))

    const object = {};
    
    [...formData].map(item => object[item[0]]=item[1]);
    
    return JSON.stringify(object);
}
