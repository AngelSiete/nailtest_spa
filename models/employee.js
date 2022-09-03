
class Employee{
    // Lets make the constrcutor for our Employee class, with the id being automatically assigned by uuidv4
    // Everything else should be specified by the user
    constructor({id,name,surname,address,phone,email,date}){

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.date = date;
    }
}

module.exports = Employee;