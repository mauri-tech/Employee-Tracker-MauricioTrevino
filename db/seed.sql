-- Inserting departments
INSERT INTO departments (name)
VALUES ('Security'), ('Arc Reactor'), ('Engineering'), ('Hospitality'), ('Leadership');

-- Inserting roles
INSERT INTO roles (title, salary, department_id)
VALUES ('Head of Security', 25000.00, 2),
       ('Scientist', 600000.00, 3),
       ('Engineer', 600000.00, 4),
       ('Butler', 200000.00, 1),
       ('CEO', 800000.00, 5);

-- Inserting employees
INSERT INTO employees (first_name, last_name, role_id, manager_id, department_id)
VALUES ('Happy', 'Hogan', 1, 3, 1),
       ('Anton', 'Vanko', 1, 1, 2),
       ('Tony', 'Stark', 3, 2, 3),
       ('Steve', 'Quinn', 5, 2, 5),
       ('Pepper', 'Potts', 5, 2, 5);