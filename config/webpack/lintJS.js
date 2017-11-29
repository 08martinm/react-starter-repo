const env = process.env.NODE_ENV;

exports.lintJS = {
  test: /\.js$/,
  exclude: /node_modules/,
  enforce: 'pre',
  loader: 'eslint-loader',
  options: env ? 
    {emitWarning: true} :
    {},
};