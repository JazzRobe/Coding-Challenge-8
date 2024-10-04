//task 1: create an employee class

class Department {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getDetails() {
        console.log(`${this.name} works as a ${this.position} earning $${this.salary}.`);
    }
}