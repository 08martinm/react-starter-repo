const mongoose = require('mongoose');
const pw = process.env.MONGOLAB_URI;

mongoose.Promise = global.Promise;
let connection = mongoose.connect(pw);
let db = mongoose.connection;

let connectToDb = startServer => {
  db.on('error', console.error.bind(console, 'connection error:'));
  db.on('open', startServer);
};

module.exports = {
  connectToDb,
  connection: db,
};
