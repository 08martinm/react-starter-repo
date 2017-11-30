const env = process.env.NODE_ENV == 'production';

exports.lintJS = {
  test: /\.js$/,
  exclude: /node_modules/,
  enforce: 'pre',
  loader: 'eslint-loader',
  options: env ? 
    {emitWarning: true} :
    {},
};