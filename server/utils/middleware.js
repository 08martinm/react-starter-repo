const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const flash = require('connect-flash');
const history = require('connect-history-api-fallback');
const expressValidator = require('express-validator');
const passport = require('./passport.js');
const routes = require('./routes/index.js');

let addMiddleware = app => {
  app.use(flash());
  app.use(morgan('dev'));
  app.use(bodyParser.json());

  app.use(session({
    secret: 'keyboard king',
    resave: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: db,
      clear_interval: 3600,
    }),
  }));

  app.use(cookieParser());

  app.use((req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated();
    next();
  });

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(expressValidator());
  app.use(history());
  app.use(routes);
  app.use(express.static(__dirname + '/../public'));
}

export default addMiddleware;
