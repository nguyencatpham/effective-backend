// config should be imported before importing any other file
import config from '../config/config';
import app from '../config/express';
import _debug from 'debug'

(async () => {
  const debug = _debug('app:bin:server')
  // module.parent check is required to support mocha watch
  // src: https://github.com/mochajs/mocha/issues/1912
  if (!module.parent) {
    // listen on port config.port
    app.listen(config.port, () => {
      console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
    });
  }

  debug(`Server is now running at http://${config.host}:${config.port}.`)
  debug(`Server accessible via localhost:${config.port} if you are using the project defaults.`)
})()

export default app
