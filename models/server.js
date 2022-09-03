const express = require('express');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.employeesPath = '/api/employees';
        this.middlewares();
        this.routes();
    }

    middlewares(){
        // to read info from the body 
        this.app.use(express.json())
        // access public directory with express
        this.app.use(express.static('public'))
    }

    routes(){
       this.app.use( this.employeesPath, require('../routes/employees'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Example app listening on port', this.port)
          })
    }
}

module.exports = Server ;
