const utils = require("./src/utils/index.cjs");
const algorithms = require("./src/algorithms/index.cjs");


if(typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
    module.exports = {
        ...utils,
        ...algorithms
    }
}