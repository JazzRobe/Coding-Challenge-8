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
    }
}


//task 2: create a department class

class Department {
    constructor(name, employees) {
        this.name = name;
        this.employees = [employees]; 
    }

    addEmployee(employee) {
        employees.push(new Employee());
    }

    getDepartmentSalary() {
        return this.employees.reduce((total, employee) + total + employee.salary, 0);
    }
}


//task 3: create a manager class that inherits from employee

class Manager extends Employee {
    constructor(name, salary, department, bonus) {
        super(name, salary, "Manager");
        this.bonus = bonus;
    }

    getDetails() {
        console.log(`${this.name} works as a ${this.position} earning $${this.salary}. Their bonus earnings are ${this.bonus}.`);
    }
}