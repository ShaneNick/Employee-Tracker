const inquirer = require('inquirer');
const {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
} = require('./queries.js');

async function addDepartmentPrompt() {
    const answer = await inquirer.prompt({
        name: 'departmentName',
        type: 'input',
        message: 'Enter the name of the new department:',
    });

    await addDepartment(answer.departmentName);
}

async function addRolePrompt() {
    const answer = await inquirer.prompt([
        {
            name: 'roleTitle',
            type: 'input',
            message: 'Enter the title of the new role:',
        },
        {
            name: 'roleSalary',
            type: 'input',
            message: 'Enter the salary for this role:',
        },
        {
            name: 'departmentId',
            type: 'input',
            message: 'Enter the ID of the department this role belongs to:',
        },
    ]);

    await addRole(answer.roleTitle, answer.roleSalary, answer.departmentId);
}

async function addEmployeePrompt() {
    const answer = await inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'Enter the first name of the new employee:',
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'Enter the last name of the new employee:',
        },
        {
            name: 'roleId',
            type: 'input',
            message: 'Enter the ID of the role this employee will have:',
        },
        {
            name: 'managerId',
            type: 'input',
            message: 'Enter the ID of the manager this employee will report to (leave blank if none):',
        },
    ]);

    await addEmployee(answer.firstName, answer.lastName, answer.roleId, answer.managerId);
}

async function updateEmployeeRolePrompt() {
    const answer = await inquirer.prompt([
        {
            name: 'employeeId',
            type: 'input',
            message: 'Enter the ID of the employee to update:',
        },
        {
            name: 'newRoleId',
            type: 'input',
            message: 'Enter the ID of the new role for this employee:',
        },
    ]);

    await updateEmployeeRole(answer.employeeId, answer.newRoleId);
}

async function main() {
    while (true) {
        try {
            const answer = await inquirer.prompt({
                name: 'action',
                type: 'list',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                    'Exit',
                ],
            });

            console.log(`You selected: ${answer.action}`);

            switch (answer.action) {
                case 'View all departments':
                    const departments = await viewAllDepartments();
                    console.table(departments);
                    break;
                case 'View all roles':
                    const roles = await viewAllRoles();
                    console.table(roles);
                    break;
                case 'View all employees':
                    const employees = await viewAllEmployees();
                    console.table(employees);
                    break;
                case 'Add a department':
                    await addDepartmentPrompt();
                    break;
                case 'Add a role':
                    await addRolePrompt();
                    break;
                case 'Add an employee':
                    await addEmployeePrompt();
                    break;
                case 'Update an employee role':
                    await updateEmployeeRolePrompt();
                    break;
                case 'Exit':
                    return; // Exit the function and end the program
            }
        } catch (error) {
            console.error(`An error occurred: ${error}`);
        }
    }
}


module.exports.main = main;