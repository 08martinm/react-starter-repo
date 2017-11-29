const env = process.env.NODE_ENV;

const babelLoader = {
  loader: 'babel-loader',
  options: { 
    presets: ['env', 'react', 'stage-2'],
    cacheDirectory: env,
  },
};

exports.loadJS = {
  test: /\.js?$/,
  exclude: /node_modules/,
  use: [babelLoader],
};
