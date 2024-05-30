let scienceClasses = ['biology', 'chemistry', 'physics', 'computer science', 'astronomy'];

console.log(scienceClasses);

scienceClasses.push('psychology');

console.log(scienceClasses);

scienceClasses.splice(2, 1);

console.log(scienceClasses);

const scienceClassesList = scienceClasses.join(', ');

console.log(scienceClassesList);