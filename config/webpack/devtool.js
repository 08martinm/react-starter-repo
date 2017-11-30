const env = process.env.NODE_ENV  == 'production';

exports.devtool = env ?
  'eval-source-map' :
  'source-map';
