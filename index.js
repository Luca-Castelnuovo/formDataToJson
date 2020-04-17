module.exports = formData => {
    const object = {};
    
    [...formData].map(item => object[item[0]]=item[1]);
    
    return JSON.stringify(object);
}
