const path = process.env.NODE_ENV;

exports.output = {
  filename: 'bundle.js',
  publicPath: '/',
  path: path.resolve(__dirname, '../../public'),
};
