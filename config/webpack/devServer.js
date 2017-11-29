const path = require('path');
const env = process.env.NODE_ENV;

exports.devServer =
  { 
    contentBase: path.join(__dirname, '../../public'),
    historyApiFallback: true,
    hot: env,
    overlay: {
      errors: env,
      warnings: env,
    },
  };
