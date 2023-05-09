USE employeeDb;
-- Departments Data
INSERT INTO departments (name) VALUES 
("Finance"),
("Marketing"),
("Operations"),
("Engineering"),
("Human-resources");

-- Roles Data
INSERT INTO role (title, salary, department_id) VALUES 
("Accountant Manager", 100000, 1),
("Financial Associate", 62000, 1),
("Sales Manager", 90000, 2),
("Sales Associate", 50000, 2),
("Operations Manager", 80000, 3),
("Operations Associate", 50000, 3),
("Chief Engineer", 110000, 4),
("Engineer", 100000, 4),
("HR Manager", 80000, 5),
("HR Associate", 60000, 5);

-- Employees Data
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
("Juan", "Gonzalez", 7, NULL),
("Ricardo", "Ortega", 5, NULL),
("Gabriela", "Martinez", 8, 1),
("Maria", "Rodriguez", 1, NULL),
("Diego", "Gutierrez", 3, NULL),
("Roberto", "Perez", 6, 2),
("Luisa", "Jimenez", 2, 4),
("Sofia", "Castro", 4, 5),
("Carlos", "Hernandez", 9, NULL),
("Daniela", "Sanchez", 10, 9);
