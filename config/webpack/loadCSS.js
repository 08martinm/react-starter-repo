const env = process.env.NODE_ENV == 'production';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const styleLoader = {
  loader: 'style-loader',
  options: {
    convertToAbsoluteUrls: true,
    sourceMap: true,
  },
};

const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true,
  },
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    ident: 'postcss',
    plugins: () => ([
      require('autoprefixer')(),
    ]),
  },
};

exports.loadCSS = {
  test: /\.(css|scss)$/,
  exclude: /\.module\.(css|scss)$/,
  use: env ? 
    [styleLoader, cssLoader, postcssLoader, 'resolve-url-loader', 'sass-loader?sourceMap'] :
    ExtractTextPlugin.extract({ 
      fallback: 'style-loader', 
      use: [cssLoader, postcssLoader, 'resolve-url-loader', 'sass-loader?sourceMap'],
    }),
};

const cssModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    localIdentName: '[name]_[local]_[hash:base64:5]',
  },
};

exports.loadCSSModules = {
  test: /\.module\.(css|scss)$/,
  use: env ? 
    [styleLoader, cssModuleLoader, postcssLoader, 'resolve-url-loader', 'sass-loader?sourceMap'] :
    ExtractTextPlugin.extract({ 
      fallback: 'style-loader', 
      use: [cssModuleLoader, postcssLoader, 'resolve-url-loader', 'sass-loader?sourceMap'],
    }),
};
