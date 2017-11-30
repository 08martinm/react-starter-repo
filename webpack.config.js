const parts = require('./config/webpack.parts');

module.exports = {
  entry: parts.entry,
  output: parts.output,
  plugins: parts.plugins,
  devtool: parts.devtool,
  devServer: parts.devServer,
  module: {
    rules: [
      parts.lintCSS,
      parts.loadCSS,
      parts.loadCSSModules,
      parts.lintJS,
      parts.loadJS,
      parts.loadImages,
    ],
  },
};
