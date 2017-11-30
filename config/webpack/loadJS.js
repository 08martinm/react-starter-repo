const env = process.env.NODE_ENV == 'production';

const babelLoader = {
  loader: 'babel-loader',
  options: { 
    presets: ['env', 'react'],
    cacheDirectory: env,
  },
};

exports.loadJS = {
  test: /\.js?$/,
  exclude: /node_modules/,
  use: [babelLoader],
};
