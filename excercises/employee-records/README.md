Some basic Javascript to practice using a constructor function to create a prototype class and instantiate it.

It was designed by Drew Nauman as part of the curriculum for the V-School full-stack web development bootcamp.

The original assignment is detailed below

# Employee Records
26 JANUARY 2016 on Programming Principles, Level 2, Exercise
You are to create a collection of employee's information for your company. Each employee has the following attributes:

Name
Job title
Salary
Status
First, you will create an array named employees

Next, you will create an Employee prototype with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "full-time".

This prototype will also have a method called printEmployeeForm that prints the employee's information to the console.

(e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")

The employee prototype will also have a method called 'add' that pushes the newly created employee to the employees array.

You will then:

1. Instantiate three employees
2. Override the status attribute of one of them to either 'part time' or 'contract'
3. Then call the printEmployeeForm method for each employee
4. Lastly, you all call the add method on all the employees and console log the employees array to make sure they were all successfully added.
5. Here's a refresher for the prototype syntax:

```
function Car (year, make, model) {  
    // use the 'this' keyword to reference each object that is created from this constructor
    this.year = year;
    this.make = make;
    this.model = model;
}

// then we 'instantiate' our prototype with the 'new' keyword and pass in the arguments

var myTacoma = new Car(2015, 'Toyota', 'Tacoma');  