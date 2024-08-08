require("dotenv").config();

const server = require('./api/server.js');

const PORT = process.env.PORT;

server.listen(PORT, function() {
  console.log(`\n*** project running on: http://localhost:${PORT}/api/projects ***\n`);
});