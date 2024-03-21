#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter your weight in kgs", type: "number", name: "weight" },
    { message: "enter your height in meters", type: "number", name: "height" },
]);
const weight = answer.weight;
const height = answer.height;
const bmi = weight / (height * height);
console.log("your bmi is", bmi);
if (bmi > 0 && bmi < 18.5) {
    console.log("you are under weight");
}
else if (bmi >= 18.5 && bmi <= 25) {
    console.log("you are healthy");
}
else if (bmi > 25 && bmi <= 30) {
    console.log("you are overweight");
}
else
    console.log("you are obese");
