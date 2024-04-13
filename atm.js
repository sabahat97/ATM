#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 40000;
let pinCode = 7287;
console.log(`Your current balance is : ${myBalance}`);
console.log(`PIN Code : ${pinCode}`);
let ansPin = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.yellow("Enter your Pin Code:"),
        type: "number"
    }
]);
if (ansPin.pin === pinCode) {
    console.log(chalk.green("Your PIN Code is Correct!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.green("What do you want to do?!"),
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let withdraw = await inquirer.prompt([
            { name: "amount",
                message: chalk.bgRedBright("Select the Amount:"),
                type: "list",
                choices: [10000, 20000, 30000, 40000, 50000]
            }
        ]);
        if (withdraw.amount > myBalance) {
            console.log(chalk.redBright("insufficient amount!"));
        }
        else {
            let amountLeft = myBalance - withdraw.amount;
            console.log(`The Remaining Balance Is : ${amountLeft}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Current Balance Is : ${myBalance}`);
    }
}
else {
    console.log(chalk.red("Pin Code is inccorect\nPlease enter the correct pincode!"));
}
