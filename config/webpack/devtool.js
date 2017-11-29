const env = process.env.NODE_ENV;

exports.devtool = env ?
  'eval-source-map' :
  'source-map';
