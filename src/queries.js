const db = require('../db/connection.js');

function viewAllDepartments() {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM department`;
        db.query(sql, (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
}

function viewAllRoles() {
    return new Promise((resolve, reject) => {
        const sql = `SELECT role.id, role.title, role.salary, department.name as department 
                     FROM role 
                     LEFT JOIN department ON role.department_id = department.id`;
        db.query(sql, (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
}


function viewAllEmployees() {
    return new Promise((resolve, reject) => {
        const sql = `SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager 
                     FROM employee e 
                     LEFT JOIN role ON e.role_id = role.id 
                     LEFT JOIN department ON role.department_id = department.id 
                     LEFT JOIN employee m ON e.manager_id = m.id`;
        db.query(sql, (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
}


function addDepartment(department) {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        db.query(sql, department, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

function addRole(title, salary, departmentId) {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
        db.query(sql, [title, salary, departmentId], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

function addEmployee(firstName, lastName, roleId, managerId) {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
        db.query(sql, [firstName, lastName, roleId, managerId || null], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}


function updateEmployeeRole(employeeId, roleId) {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
        db.query(sql, [roleId, employeeId], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
};
