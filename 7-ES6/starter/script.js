//Strings
//Template literals

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
    return 2020-year;
}

//ES5
console.log(firstName +' ' + lastName +' is ' + calcAge(yearOfBirth) + ' years old.');

//ES6
console.log(`${firstName} ${lastName} is ${calcAge(yearOfBirth)} years old.`);

//String methods

const n = `${firstName} ${lastName}`;
console.log(n);
console.log(`Starts with J: ${n.startsWith('J')}`);
console.log(`Ends with th: ${n.endsWith('th')}`);
console.log(`Includes SM: ${n.includes('SM')}`);
console.log('Repeat 4 times:' +  `${n} `.repeat(4));