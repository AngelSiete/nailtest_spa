require('dotenv').config();
const Server =  require('./models/server')
// const Employee = require('./models/employee')

const PORT = process.env.PORT;

const server = new Server(PORT);

server.listen();