USE employee_db;

-- Insert departments
INSERT INTO department (name)
VALUES 
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

-- Insert roles
INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Accountant', 70000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Mary', 'Johnson', 3, 1),
    ('James', 'Brown', 4, NULL),
    ('Patricia', 'Jones', 5, 4),
    ('Robert', 'Davis', 6, 4),
    ('Jennifer', 'Miller', 7, 4);
