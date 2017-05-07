const app = require('./lib/app');
const http = require('http');
require('./lib/connect');

// app.listen(3000, () => {
//   console.log('Server listening at PORT 3000');
// });

const server = http.createServer(app.callback());
server.listen(3000);