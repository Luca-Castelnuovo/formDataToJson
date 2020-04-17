# formDataToJson

[![NPM](https://img.shields.io/npm/v/formdatatojson.svg)](https://www.npmjs.com/package/formdatatojson)

A small module to convert an formData object to JSON

## Example

```javascript
var formDataToJson = require("formdatatojson");

const form = document.querySelector("#myForm");
const formData = new FormData(form);

const json = formDataToJson(formData);
```

## LICENSE [MIT](LICENSE)
