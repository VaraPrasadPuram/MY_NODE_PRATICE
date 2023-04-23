const data = require('loadsh');

const item = [1, [2, [3, [4]]]]
const newitem = data.flattenDeep(item);
console.log(newitem)
