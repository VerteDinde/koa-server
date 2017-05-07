const Koa = require('koa');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = new Koa();

// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });

app.use(morgan('dev'));
app.use(bodyParser.json());

const poms = require('./routes/poms');
app.use(poms.routes());

module.exports = app;