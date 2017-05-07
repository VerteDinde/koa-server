const Koa = require('koa');
const morgan = require('koa-morgan');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });

app.use(morgan('dev'));
app.use(bodyParser());

const poms = require('./routes/poms');
app.use(poms.routes());

module.exports = app;