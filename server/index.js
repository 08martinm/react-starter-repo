const express = require('express');
const addMiddleware = require('./utils/middleware');
const connectToDb = require('./db/connection');
const port = process.env.PORT || 5000;

let startServer = () => {
  let app = express();
  addMiddleware(app);
  app.listen(port, err => console.log('Server on:', port));
};

connectToDb(startServer);
