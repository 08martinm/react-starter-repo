const env = process.env.NODE_ENV;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const styleLoader = {
  loader: 'style-loader',
  options: {
    sourceMap: true,
    convertToAbsoluteUrls: true,
  },
};

// const cssLoader = {
//   loader: 'css-loader',
//   options: {
//     modules: false,
//     importLoaders: 1,
//   },
// };

const moduleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    importLoaders: 3,
    localIdentName: '[name]_[local]_[hash:base64:5]',
  },
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: () => ([
      require('autoprefixer')(),
      require('precss')(),
    ]),
  },
};

// exports.loadCSS = {
//   test: /\.(css|scss)$/,
//   exclude: /\.module\.(css|scss)$/,
//   use: env ? 
//     [styleLoader, cssLoader, 'resolve-url-loader', postcssLoader, 'sass-loader'] :
//     ExtractTextPlugin.extract({ 
//       fallback: 'style-loader', 
//       use: [cssLoader, 'resolve-url-loader', postcssLoader, 'sass-loader'],
//     }),
// };

exports.loadCSSModules = {
  test: /\.(css|scss)$/,
  use: env ? 
    [styleLoader, moduleLoader, 'resolve-url-loader', postcssLoader, 'sass-loader'] :
    ExtractTextPlugin.extract({ 
      fallback: 'style-loader', 
      use: [moduleLoader, 'resolve-url-loader', postcssLoader, 'sass-loader'],
    }),
};
