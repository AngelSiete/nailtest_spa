const {request, response} = require('express');
const Employee = require('../models/employee')
const fs = require('fs');


const employeesGet = (req,res = response) => {
   
    fs.readFile(process.env.FILEDB, 'utf8', (err,data)=>{
        if (err){
            res.status(400).json({
                msg: "Error",
                // especificar detalles del error
            });
            return;
        }

        
        /*
        data = [[
            <id>, <name>, ...
        ],[],...]

        let employees = {}
        for (element in data){
            try{
            let emp = Employee.parse(element);

            employees.push(emp.encode());
            Employee.parse() // DA ERROR
            Employee.encode() // DA ERROR
            }catch(e){

            }
        }

        */

        const parsedData = JSON.parse(data);
        res.json({
            msg: "get method OK",
            parsedData
        })
    })   
}

const employeesGetById = (req,res = response) =>{
    const {id} = req.params;
    
    fs.readFile(process.env.FILEDB, 'utf8', (err,data)=>{
        if (err){
            res.status(400).json({
                msg: "Error",
                // especificar detalles del error
            });
            return;
        }

        
        /*
        data = [[
            <id>, <name>, ...
        ],[],...]

        let employees = {}
        for (element in data){
            try{
            let emp = Employee.parse(element);

            employees.push(emp.encode());
            Employee.parse() // DA ERROR
            Employee.encode() // DA ERROR
            }catch(e){

            }
        }

        */

        const parsedData = JSON.parse(data);
        const userById = parsedData.find(el => el.id == id);
        
        
        res.json({
            msg: "get method OK",
            userById
        })
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

    data.push(employee);
    fs.writeFile(process.env.FILEDB, JSON.stringify(data), err =>{
        if(err){
            res.status(400).json({
                msg: "Error",
                 // especificar detalles del error
            });
            return;
        }
        res.json({
            msg: "post API CONtroller",
            employee
        })   
    })
    //fs.writeFileSync(process.env.FILEDB, JSON.stringify(data));


}

const employeesDelete = (req,res = response) => {
    res.json({
        msg: "delete API CONtroller"
    })
}

module.exports = {
    employeesGet,employeesGetById, employeesPut,
    employeesPost, employeesDelete,
}