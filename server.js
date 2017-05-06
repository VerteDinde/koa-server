const app = require('./lib/app');
const http = require('http');
require('./lib/connect');

app.listen(3000, () => {
  console.log('Server listening at PORT 3000');
});