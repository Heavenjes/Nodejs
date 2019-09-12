
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log(`Hi ${this.firstname} ${this.lastname}`);
        // console.log(__filename);
        //  console.log(__dirname);
        //  console.log(module);
        //  console.log(exports);



    }
}




    
module.exports = Person;
