Employee Tracker
Description
The Employee Tracker is a command-line application built using Node.js, Inquirer, and MySQL. It offers a simple interface to manage a company's employee database. This tool serves as a content management system (CMS) that enables non-developers to view and interact with information stored in databases easily.

Installation
Before you can use the Employee Tracker, ensure you have Node.js and MySQL installed on your machine. You will also need to set up a .env file with your MySQL connection details. Here is a sample:

bash
Copy code
npm install
You will also need to set up your MySQL database. Use the schema provided in the schema.sql file to set up your database and tables.

Usage
To start the application, run the following command in your terminal:

bash
Copy code
npm start
When you start the application, you will be presented with a list of options:

View all departments
View all roles
View all employees
Add a department
Add a role
Add an employee
Update an employee role
Selecting an option will allow you to interact with the application accordingly.

Features
View All Departments: This option presents a formatted table showing department names and department ids.
View All Roles: This option presents the job title, role id, the department that role belongs to, and the salary for that role.
View All Employees: This option presents a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.
Add a Department: This option prompts you to enter the name of the department and adds that department to the database.
Add a Role: This option prompts you to enter the name, salary, and department for the role and adds that role to the database.
Add an Employee: This option prompts you to enter the employee’s first name, last name, role, and manager, and adds that employee to the database.
Update an Employee Role: This option prompts you to select an employee to update and their new role and updates this information in the database.


Walkthrough Video:
https://drive.google.com/file/d/1B3j8uGXXeq-cadOWkQxfSbr1XTUZU9OI/view
