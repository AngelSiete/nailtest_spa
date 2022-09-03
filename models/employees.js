const Employee = require('./employee');

class Employees {

    _list = {};

    get employeesArray(){
        const list = [];
        Object.keys(this._list).forEach( key => {
            const tarea = this.list[key];
            list.push( tarea );
        });

        return list;
    }

    constructor() {
        this._list = {};
    }
}