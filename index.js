const express = require('express');
const consign = require('consign');

const app = express();

require('./startup/db')();
require('./startup/logger')(app);
require('./startup/parser')(app);
require('./startup/cors')(app);

consign({verbose: false})
  .include('routes')
  .into(app);

require('./middlewares/errors')(app);

process.on('uncaughtException', err => {});

process.on('unhandledRejection', err => {
  throw err;
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  debug(`Server listen on port ${port}...`);
});
