const path = require('path');
const env = process.env.NODE_ENV == 'production';
const entryPath = path.resolve(__dirname, '../../src/index.js');

exports.entry = {
  array: true,
  data: env ? 
    ['react-hot-loader/patch', entryPath] :
    [entryPath],
};
