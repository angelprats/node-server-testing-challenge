require('dotenv').config();

const server = require('./api/server.js');

console.log('\n*** db env', process.env.DB_ENVS);
const port = process.envPORT || 5000;
server.listen(port, () => console.log(`\n** Server up and Running on Port ${port} **\n`));