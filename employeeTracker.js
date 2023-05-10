// Importing required packages
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const figlet = require("figlet");

// Defining function to display application header
const displayEmployeeTrackerHeader = () => {
  figlet("EMPLOYEE TRACKER!!", (err, data) => {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
};

// Displaying application header
displayEmployeeTrackerHeader();

// Creating a connection to the MySQL database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employeeDb"
});

connection.connect((err) => {
  if (err) throw err;
  startApp();
});

// Defining the main function that runs the application
const startApp = async () => {
  const { action } = await inquirer.prompt({
    name: "action",
    type: "rawlist",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "View All Employees By Department",
      "View departments",
      "View roles",
      "Add department",
      "Add role",
      "Add Employee",
      "Remove Employee",
      "Update Employee Role",
      "Update Employee Manager",
      "EXIT"
    ]
  });

  switch (action) {
    case "View All Employees":
      await viewAllEmployees();
      break;
    case "View All Employees By Department":
      await viewEmployeesByDepartment();
      break;
    case "View departments":
      await viewAllDepartments();
      break;
    case "View roles":
      await viewAllRoles();
      break;
    case "Add Employee":
      await addEmployee();
      break;
    case "Add department":
      await addDept();
      break;
    case "Add role":
      await addRole();
      break;
    case "Remove Employee":
      await removeEmployee();
      break;
    case "Update Employee Role":
      await updateEmployeeRole();
      break;
    case "Update Employee Manager":
      await updateEmployeeManager();
      break;
    case "EXIT":
      console.log("Thanks for using Employee Tracker! Have a nice day!");
      process.exit();
  }
};

// Defining function to view all employees in the database
const viewAllEmployees = async () => {
  try {
    const results = await new Promise((resolve, reject) => {
      connection.query("SELECT * FROM employees", (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });

    console.table(results);
    startApp();
  } catch (err) {
    console.error(err);
  }
};

// Starting the application
startApp();
