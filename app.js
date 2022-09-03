require('dotenv').config();


const Server =  require('./models/server')
const Employee = require('./models/employee')

const server = new Server();

server.listen();