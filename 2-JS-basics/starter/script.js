console.log("Hello world js");

var firstName = 'John';
var age = 27;
var isMarried = false;
var lastName = 'Miller';

//lastName = prompt('What is his last name?');

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


//----------Functions-----------
console.log('--------Functions---------')

function calculateAge(birthYear){
    return 2020 - birthYear;
}

function yearsUntilRetirement(year, name){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement <= 0){
        console.log(name + ' is already retired ' + Math.abs(retirement) + ' years ago');
    } else {
        console.log(name + ' is ' + age +' years old. '+ name + ' retires in ' + retirement + ' years.' );
    }
    
}

yearsUntilRetirement(1979, 'Orsi');
yearsUntilRetirement(1948, 'John');

//Function declaration
//function whatDoYouDo (job, firstname){}

//Funcion expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher': 
            return firstName +' is a ' + job + ' and teach kids.';
        case 'driver':
            return firstName +' is a ' + job + ' and drive cars.';
        default:
            return firstName +' is a ' + job + ' and do something else';
    }
}

console.log(whatDoYouDo('BI analyst','Orsi'));
console.log(whatDoYouDo('teacher','John'));

//Arrays
console.log('--------Arrays---------')
var john = ['John', 'Smith', 1990, 'teacher', false ];
console.log(john);

john.push('blue');
console.log('push to the end');
console.log(john);
john.unshift('Mr.');
console.log('unshift to the begining');
console.log(john);

john.pop();
console.log('pop from the end');
console.log(john);
john.shift();
console.log('shift from the begining');
console.log(john);

console.log('indexof 1990');
console.log(john.indexOf(1990));
console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' :
'John is a designer';
console.log(isDesigner);

//----------Objects-----------

console.log('--------Objects---------')

//Object literal
var mary = {
    firstName: 'Mary',
    lastName: 'Smith',
    job: 'teacher',
    birthYear: '1979',
    calcAge: function(){
        this.age = 2020 - this.birthYear;
    }
}
console.log(mary);
console.log('Age: ' + mary.calcAge());
console.log('Name: ' + mary.firstName + ' ' + mary['lastName']);
console.log('change lastname');

mary.lastName ='Miller';
console.log('New name: '+ mary.firstName + ' ' + mary.lastName);
console.log(mary);

// new object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane['lasName'] = 'Teller';


console.log(jane);

console.log('--------Loops and iteration---------')

var tom = ['Tom', 'Engel', 27, 'driver', false, 'blue'];
console.log('--all array--');
console.log(tom);
console.log('--for every second element--');
for(var i=1; i<tom.length; i +=2){
    console.log(tom[i]);
}

console.log('--while all--');
var j = 0;
while(j < tom.length){
    console.log(tom[j]);
    j++;
}

console.log('--for continue all without not strings--')
for(var k=0; k<tom.length; k++){
    if(typeof tom[k] !== 'string') continue;
    console.log(tom[k]);
}

console.log('--for break when not strings--')
for(var k=0; k<tom.length; k++){
    if(typeof tom[k] !== 'string') break;
    console.log(tom[k]);
}

console.log('--for backward--');
for(var i=tom.length-1; i>=0; i--){
    console.log(tom[i]);
}