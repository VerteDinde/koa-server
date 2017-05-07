const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../lib/app');

const assert = chai.assert;
chai.use(chaiHttp);

describe('Poms Koa API', () => {

  const request = chai.request(app); //why does this need to be inside 'describe'?

  it('GET/ all poms', () => {
    return request.get('api/poms')
    .then(res => {
      const poms = res.body;
      assert.deepEqual(poms, []);
    });
  });

});