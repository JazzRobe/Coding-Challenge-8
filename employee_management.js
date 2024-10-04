//task 1: create an employee class

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    } 

    getDetails() {
        console.log(`${this.name} works as a ${this.position} earning $${this.salary}.`);
    } //retrieving details for specified employee
}


//task 2: create a department class

class Department {
    constructor(name) {
        this.name = name;
        this.employees = []; //initialize empty array of employees
    }

    addEmployee(employee) {
        this.employees.push(employee); //add new employee to array
    }

    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    } 

    calculateTotalSalaryWithBonus() {
        if (this.employee instanceof Manager) {
            return this.employees.reduce((total, employee) => {
                return total + employee.salary + employee.bonus}, 0);
        }
    }
}


//task 3: create a manager class that inherits from employee

class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, "Manager", department);
        this.bonus = bonus;
    }

    getDetails() {
        console.log(`${this.name} works as a ${this.position} earning $${this.salary}. Their bonus earnings are ${this.bonus}.`);
    }
}


//task 4: handle bonuses for managers (added above)


//task 5: create and manage departments and employees (taken from example data

const engineering = new Department("Engineering");
const marketing = new Department("Marketing");
console.log(engineering);
console.log(marketing);

const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);
console.log(alice);
console.log(bob);
console.log(charlie);
console.log(diana);

engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);
console.log(engineering);
console.log(marketing);

console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);