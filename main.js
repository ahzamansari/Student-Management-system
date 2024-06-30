import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\n\tWelcome To Ahzam - Student Management System"));
const randomnumber = Math.floor(10000 + Math.random() * 90000);
let mybalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter the student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return "Please enter a non-Empty value";
            }
            ;
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course want to enrolled",
        choices: ["HTML", "Javascript", "Typescript", "Phython", "C++"]
    }
]);
const tutionfee = {
    "HTML": 2000,
    "Javascript": 5000,
    "Typescript": 6000,
    "Phython": 10000,
    "C++": 4000,
};
console.log(chalk.gray(`\ntution fees: ${tutionfee[answer.courses]}/-`));
console.log(chalk.grey(`Balance: ${mybalance}\n`));
let paymenttype = await inquirer.prompt([
    {
        name: "paymentmeathod",
        type: "list",
        message: "Select your Payment Meathod",
        choices: [chalk.blue("Bank Transfer"), chalk.green("Easy Paisa"), chalk.red("Jazz Cash")]
    },
    {
        name: "amount",
        type: "input",
        message: "\nTransfer money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return "Please enter a non-Empty value";
            }
            ;
        },
    },
]);
console.log(`Your payment meathod is: ${paymenttype.paymentmeathod}`);
const tutionfees = tutionfee[answer.courses];
const paymentamount = parseFloat(paymenttype.amount);
if (tutionfees === paymentamount) {
    console.log(chalk.green(`Congratulation you have sucessfully enrolled in ${answer.courses}`));
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you like to do next",
            choices: ["View status", "Exit"]
        }
    ]);
    if (ans.select === "View status") {
        console.log(chalk.blue("\n\t Your Status"));
        console.log(chalk.blueBright(`Student name: ${answer.students}`));
        console.log(chalk.blueBright(`Student ID: ${randomnumber}`));
        console.log(chalk.blueBright(`Course: ${answer.courses}`));
        console.log(chalk.blueBright(`Tution Fees paid: ${paymentamount}`));
        console.log(chalk.blueBright(`Balance: ${mybalance += paymentamount}`));
    }
    else {
        console.log(chalk.red("Exiting From student management system"));
    }
}
else {
    console.log(chalk.red("invaild amount of course"));
}
