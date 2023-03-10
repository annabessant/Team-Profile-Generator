// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// const Employee = require("./Employee.js");

// class Engineer extends Employee {
//     constructor(name, email, github) {
//         super(name, email, "Engineer");
//         this.github = github;
//         // and other properties
//     }
// }

// const eng1 = new Engineer("Danish", "danish@gmail.gov", "danisheng");

// module.exports = Engineer;

const Employee = require(`./employee`)

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }
};

module.exports = Engineer;