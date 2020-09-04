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