const router = require('koa-router')();
const Pom = require('../models/pom');

router.get('/', (ctx, next) => {
  Pom.find()
  .then(poms => ctx(poms))
  .catch(next);
});

module.exports = router;