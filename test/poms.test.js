const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;

describe('Poms Koa API', () => {

  before(db.drop);

  it('GET/ all poms', () => {
    request.get('/', async (ctx) => {
      const pom = await Pom.findById(sessionId);
      ctx.body = `Hello, ${pom.name}!`;
    });
  });

  it('POST/ a new pom', () => {
    
  });

});