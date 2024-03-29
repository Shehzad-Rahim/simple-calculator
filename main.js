#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        message: "Enter First number", type: "number", name: "firstnumber"
    },
    { message: "Enter Second number", type: "number", name: "secondnumber" },
    {
        message: "Select one of the operators to perform action",
        type: "list", name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"]
    }
]);
console.log(answer);
// Conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Substraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please Enter the correct number");
}
