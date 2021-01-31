class Person {
    constructor(firstName, lastName, age, address){
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.address = address;
    }

    static self() {
       return this;
    }

    toString(){
       return "[object Person]";
    }

    get describe(){
      return `aaaaaaa`
    }

    getFullName(){
       return `${this.firstName} ${this.lastName}`;
    }
}
class Employee extends Person { //Inherits from "Person" class
  constructor(firstName, lastName, age, address, jobTitle, yearStarted) {
    super(firstName, lastName, age, address);
    this.jobTitle = jobTitle;
    this.yearStarted = yearStarted;
  }

  describe() {
    return `I am ${this.getFullName()} and I have a position of ${this.jobTitle} and I started at ${this.yearStarted}`;
  }

  toString() { // Overriding the "toString" method of "Person"
    return "[object Employee]";
  }
}

const p = new Person('w' ,'y' , 38, '北京')
const p2 = new Employee('w' ,'y' , 38, '北京','IT','17')
console.log(p.getFullName(),p.describe, p.toString(),  p2.describe());

