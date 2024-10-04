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