import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import config from './config';
import expressWinston from 'express-winston';
import routes from '../src/routes/index.route';
import APIError from '../src/helpers/api-error';
import methodOverride from 'method-override';
import winstonInstance from './winston';
import httpStatus from 'http-status';
import swaggerJSDoc from 'swagger-jsdoc'
import fs from 'fs'
import _ from 'lodash'
import path from 'path'

const app = express();
// loger
if (config.env === 'development') {
    app.use(logger('dev'));
  }
// swagger definition
var swaggerDefinition = {
  info: {
    title: 'Effective Study API docs',
    version: '1.0.0',
    description: 'Effective Study RESTful API with Swagger',
  },
  host: config.swagger.host,
  basePath: config.swagger.basePath
};
// options for the swagger docs
var root = fs.readdirSync(__dirname + "/../src/");
var containerRouter = _.map(root, function (item) {
  return './src/' + item + '/*.js';
});
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: containerRouter,
  // apis: ['./modules/image/*.js',],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);
// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/../", 'public')));
app.use("/public", express.static(path.join(__dirname + "/../", 'public')));

app.use(cookieParser());
app.use(compress());
app.use(methodOverride());
// secure apps by setting various HTTP headers
app.use(helmet());
// enable CORS - Cross Origin Resource Sharing
app.use(cors());
app.all('/*', function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, token, Authorization, Last-Modified, Date, languageid, anonymoustoken');
  res.header('Access-Control-Allow-Credentials', true);
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  res.setHeader('Date', (new Date()).toUTCString());
  next();
});
// mount all routes on /api path

app.use('/api', routes);

// enable detailed API logging in dev env
if (config.env === 'development') {
    expressWinston.requestWhitelist.push('body');
    expressWinston.responseWhitelist.push('body');
    app.use(expressWinston.logger({
      winstonInstance,
      meta: true, // optional: log meta data about request (defaults to true)
      msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
      colorStatus: true // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
    }));
  }
app.use(function (req, res, next) {
  if (req.method == "OPTIONS")
    return res.status(200).send();
  return next();
});
app.get('/swagger.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
  // if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
    if (err instanceof expressValidation.ValidationError) {
      // validation error contains errors which is an array of error each containing message[]
      const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
      const error = new APIError(unifiedErrorMessage, err.status, true);
      return next(error);
    } else if (!(err instanceof APIError)) {
      const apiError = new APIError(err.message, err.status, err.isPublic);
      return next(apiError);
    }
    return next(err);
  });
  // catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new APIError('API not found', httpStatus.NOT_FOUND);
    return next(err);
  });
  // error handler, send stacktrace only during development
app.use((err, req, res, next) => // eslint-disable-line no-unused-vars
res.status(err.status).json({
  message: err.isPublic ? err.message : httpStatus[err.status],
  stack: config.env === 'development' ? err.stack : {}
})
);

export default app;