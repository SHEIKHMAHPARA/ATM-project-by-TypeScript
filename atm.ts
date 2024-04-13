#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;

let pinCode = 3455;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number",
})
if (pinAnswer.pin === pinCode) {
    console.log("Your Pin is correct");
    let operationAnswer = await inquirer.prompt([{
        name: "operations",
        message: "Please select option",
        type: "list",
        choices: ["withdraw", "fast cash", "check balance"],
    }])
    //if user select withdraw
    if (operationAnswer.operations === "withdraw") {
        let amountAns = await inquirer.prompt([{
            name: "amount",
            message: "Enter your amount",
            type: "number",
        }])
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`the remaining balance is ${balance}`);
        }
        else {
            console.log(`You have been insufficient balance`);
        }
    }
    // if user select fastcash
    else if (operationAnswer.operations === "fast cash") {
        let fastcashAns = await inquirer.prompt([{
            name: "amount",
            type: "list",
            choices: ["1000", "3000", "5000", "15000"],
        }]);
        if (fastcashAns.amount <= myBalance) {
            let balance2 = myBalance - fastcashAns.amount;
            console.log(`the remaining balance is ${balance2}`);
        }
        else {
            console.log(`you have insufficient amount`);
        }
    }
    //if user select check balance
    else if (operationAnswer.operations === "check balance") {
        console.log(myBalance);
    }
}
else {
        console.log("your pin is wrong");
    }


