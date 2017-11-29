const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const pw = process.env.MONGOLAB_URI;

mongoose.Promise = global.Promise;
let connection = mongoose.connect(pw);
let db = mongoose.connection;
let connectToDb = startServer => {
  db.on('error', console.error.bind(console, 'connection error:'));
  db.on('open', startServer);
};

export default connectToDb;
