//Create an array to hold my Employee objects
var employees = [];

//create a prototype Employee to store objects with various employee data;
function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "full-time";
//a method to log the current employee object to the console
    this.printEmployeeForm = function() {
        console.log (this)
    }
//a method to ad a new array element containing the new employee object
    this.add = function() {
        employees.push(this);
    }
}
//instantiating a new employee, manually overriding the status property,
//then running the two methods to "log" him
var peter = new Employee('Peter Gibbons', 'Constuction Worker', 30000);
peter.status = 'contract';
peter.printEmployeeForm();
peter.add();

//instantiating a new employee, then running the two methods to "log" him
var michael = new Employee('Michael Bolton', 'Programmer', 60000);
michael.printEmployeeForm();
michael.add();

//instantiating a new employee, then running the two methods to "log" him
var samir = new Employee('Samir Nagheenanajar', '"Programmer', 55000);
samir.printEmployeeForm();
samir.add();

console.log(employees);