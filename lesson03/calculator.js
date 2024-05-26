//begin by entering the operation
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// enter two numbers to perform math operations on
const number1 = parseFloat(prompt('Enter first number: '));
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

