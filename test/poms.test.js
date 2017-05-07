const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;

describe('Poms Koa API', () => {

  before(db.drop);

  it('GET/ all poms', () => {
    return request.get('api/poms')
    .then(res => {
      const poms = res.body;
      assert.deepEqual(poms, []);
    });
  });

});