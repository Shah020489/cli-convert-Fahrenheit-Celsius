#! /usr/bin/env node
import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    {
        name: 'fahrenheit',
        type: 'number',
        message: 'Enter the fahrenheit value'
    }
]);
console.log(answer.fahrenheit);
console.log("Convert to celcius");
console.log(answer.fahrenheit - 32 * 5 / 9);
