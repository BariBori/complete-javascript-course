// Function constructor

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = 
function(){
    console.log(2020-this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';


var john = new Person('John', 1990, 'teacher');
var mark = new Person('Mark', 1989, 'plumber');
var jane = new Person('Jane', 1969, 'designer');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john.name +" " +john.lastName);
console.log(jane.name +" " +jane.lastName);
console.log(mark.name +" " +mark.lastName);

// 

var Employee = function(name, monthlyIncome, daysOfWork, hoursOfDaily){
    this.name = name;
    this.monthlyIncome = monthlyIncome;
    this.daysOfWork = daysOfWork;
    this.hoursOfDaily = hoursOfDaily;
}

var marietta = new Employee('Marietta', 450000, 20, 10);

Employee.prototype.dailyIncome = function(){
    console.log(this.name +"'s dailyIncome: " + this.monthlyIncome / this.daysOfWork);
}

Employee.prototype.hourlyIncome = function(){
    console.log(this.name +"'s hourly income: " +this.monthlyIncome / this.daysOfWork/this.hoursOfDaily);
}

marietta.dailyIncome();
marietta.hourlyIncome();


//Object.create

var personProto = {
    calcAge: function(){
        console.log(2020-this.birthYear);
    }
};

var tim = Object.create(personProto);
tim.name = 'Tim';
tim.birthYear = 1976;
tim.job = 'carpenter';

var kate = Object.create(personProto,
    {
        name: {value: 'Kate'},
        birthYear: {value: '1956'},
        job: {value: 'developer'}
});


tim.calcAge();
kate.calcAge();


//primitives vs objects

//primitives
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

//objects
var obj1 = {
    name: 'Mimi',
    age: 18
}

var obj2 = obj1;

obj1.name = 'Momo';

console.log(obj1.name);
console.log(obj2.name);

//functions

var age = 27;
var obj = {
    name: 'Orsolya',
    city: 'Budapest'
};

function change(a,b){
    a = 30;
    b.city = 'San Francisco';
};

change(age, obj);

console.log(age);
console.log(obj.city);

//Passing funcionts as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes=[];
    for(i=0; i<arr.length; i++){
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAges(el){
    return 2020-el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el>=18 && el <=81){
        return Math.round(206.9 -(0.67 * el));
    }
    return -1;
    
}

var ages = arrayCalc(years, calculateAges);
console.log(ages);

var legal = arrayCalc(ages, isFullAge);
console.log(legal);

var heartRates = arrayCalc(ages, maxHeartRate);
console.log(heartRates);


//functions returning functions

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you explain what UX design is? ')
        }
    } else if (job === 'teacher'){
        return function(name){
            console.log(name + ', what subject do you teach? ')
        }
    } else {
        return function(name){
            console.log('Hello ' + name + ', what do you do for a living?')
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var avrQuestion = interviewQuestion('plumber');

teacherQuestion('John');
designerQuestion('Mira');
avrQuestion('Kevin');

interviewQuestion('designer')('Ludmilla');


function whatSay(animal){
    switch(animal){
        case 'dog': return function(name){
            console.log(name + ' the ' + animal +' says woof');
        } 
        case 'cat': return function(name){
            console.log(name +  ' the ' + animal +' says meow');
        }
        default: return function(name){
            console.log(name +  ' the ' + animal +' says strange things');
        }
    }
}

whatSay('dog')('Killer');
whatSay('cat')('Milky');
whatSay('alligator')('Later');

//***************plusz infok

const sayHello = () =>{
    return 'Hello';
}
console.log(sayHello());


const sayHelloToPerson = (greeter, person)  =>{
    return greeter() + " " + person;
};
console.log(sayHelloToPerson(sayHello, "Jack!"));


const greeterMaker = greeting =>{
    return person => {
        return greeting + " " + person + "!";
    }
}

const sayHiToPerson = greeterMaker("Hi");
console.log(sayHiToPerson("Jane"));

const sayHowdyToPerson = greeterMaker("Howdy");
console.log(sayHowdyToPerson("Bob"));

var arr = [28, function(){console.log("Hi from an array");}];
arr[1]();

var obj = {
    number: 20,
    funct: function(){console.log("Hi form an object");}
};
obj.funct();

console.log(28 + (function(){return 10;})());

//******************************** */