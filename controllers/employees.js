const {request, response} = require('express');
const Employee = require('../models/employee')
const fs = require('fs');
const data =  JSON.parse((fs.readFileSync(process.env.FILEDB, 'utf8')));

const employeesGet = (req,res = response) => {

   
    // const dataJSON = JSON.parse(data)

    res.json({
        msg: "get method OK",
        data
    })
}

const employeesPut = (req,res = response) => {
    const {id} = req.params;
    res.json({
        msg: "put API CONtroller",
        id
    })
}

const employeesPost = (req,res = response) => {
    const body = req.body;
    const employee = new Employee(body);


 data.push(employee)
 fs.writeFileSync(process.env.FILEDB, JSON.stringify(data));

    res.json({
        msg: "post API CONtroller",
        employee
    })
}

const employeesDelete = (req,res = response) => {
    res.json({
        msg: "delete API CONtroller"
    })
}

module.exports = {
    employeesGet, employeesPut,
    employeesPost, employeesDelete,
}