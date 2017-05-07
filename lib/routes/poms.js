const router = require('koa-router')();
const Pom = require('../models/pom');

router.get('/', (req, res, next) => {
  Pom.find()
  .then(poms => res.send(poms))
  .catch(next);
});

module.exports = router;