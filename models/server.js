const express = require('express');

const EMPLOYEES_ENDOPOINT = '/api/employees';

class Server {

    constructor(PORT){
        this._port = PORT;
        this._app = express();
        this._setupMiddlewares();
        this._setUpRoutes();
    }

    _setupMiddlewares(){
        // to read info from the body 
        this._app.use(express.json())
        // access public directory with express
        this._app.use(express.static('public'))
    }

    _setUpRoutes(){
       this._app.use( EMPLOYEES_ENDOPOINT, require('../routes/employees'))
    }
    
    // PUBLIC API

    listen(){
        this._app.listen(this._port, () => {
            console.log('Example app listening on port', this._port)
          })
    }
}

module.exports = Server ;
