console.log("Hello world js");

var firstName = 'John';
var age = 27;
var isMarried = false;

var lastName = prompt('What is his last name?');

console.log(firstName + ' ' + lastName + " is "
+ age + ' years old. Is he married? ' + isMarried);

age = 'twenty eight';

console.log(firstName + ' ' + lastName + " is "
+ age + ' years old. Is he married? ' + isMarried);

lastName = "Smith";
console.log(firstName + ' ' + lastName + " is "
+ age + ' years old. Is he married? ' + isMarried);

age = 28;

console.log('John\'s age: '+ age);


var drink = age >=18 ? 'beer' : 'juice';
console.log('John drinks ' + drink);
