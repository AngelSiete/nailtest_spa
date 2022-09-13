
class Employee{
    // Lets make the constructor for our Employee class, with the id being automatically assigned by uuidv4
    // Everything else should be specified by the user
    constructor({id,name,surname,address,phone,email,birthday}){

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.birthday = birthday;
    }

    /**
     * @return {Object} returns the class instance as a codified object
     */
    encode(){
        return JSON.parse(this);
    }

    /**
     * 
     * @param {Object} object Object to be parsed as Employee
     * @return {Employee} 
     */
    static parse(object){
        return new Employee(object.id,object.name, object.surname, object.address, object.phone, object.email, object.birthday );
    }
}

module.exports = Employee;