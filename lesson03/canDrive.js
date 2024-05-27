// enter first name
const firstname = prompt('Enter first name: ');

//enter last name
const lastname = prompt('Enter last name: ');

const x = 16;

//enter the operation sign
const y = parseInt(prompt('Enter age in years: '));

let result;

//depending on the operation desired
if (y >= x) {
    result = (firstname + " " + lastname + " has " + (y - x) + " years of driving experience.");
}
else if (y < x) {
    result = (firstname + " " + lastname + " has " +(x - y) + " more years until they are old enough to drive.");
}

// display results

console.log (result);