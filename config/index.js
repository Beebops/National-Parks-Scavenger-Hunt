const bunyan = require('bunyan')
// Load package.json
const pjs = require('../package.json')

// Get some meta info from the package.json
const { name, version } = pjs

// Set up a logger
const getLogger = (serviceName, serviceVersion, level) =>
  bunyan.createLogger({ name: `${serviceName}:${serviceVersion}`, level })

// Configuration options for different environments
module.exports = {
  development: {
    name,
    version,
    serviceTimeout: 30,
    log: () => getLogger(name, version, 'debug'),
    database: {
      user: 'dev_user',
      host: 'localhost',
      database: 'dev_database',
      password: 'dev_password',
      port: 5432,
    },
  },
  production: {
    name,
    version,
    serviceTimeout: 30,
    log: () => getLogger(name, version, 'info'),
    database: {
      user: 'prod_user',
      host: 'production_host',
      database: 'prod_database',
      password: 'prod_password',
      port: 5432,
    },
  },
  test: {
    name,
    version,
    serviceTimeout: 30,
    log: () => getLogger(name, version, 'fatal'),
    database: {
      user: 'test_user',
      host: 'localhost',
      database: 'test_database',
      password: 'test_password',
      port: 5432,
    },
  },
}
