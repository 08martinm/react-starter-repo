const path = require('path');
const env = process.env.NODE_ENV;
const entryPath = path.resolve(__dirname, '../../src/index.js');

exports.entry = {
  array: true,
  data: env ? 
    ['bootstrap-loader', 'react-hot-loader/patch', entryPath] :
    ['bootstrap-loader', entryPath],
};
