
// enter first number for the operation
const number1 = parseFloat(prompt('Enter first number: '));


//enter the operation sign
const operator = prompt('Enter operator ( either +, -, * or / ): ');

//enter second number for the operation
const number2 = parseFloat(prompt('Enter second number: '));

let result;

//depending on the operation desired
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display results
console.log("The Result of this operation is : " + result);

