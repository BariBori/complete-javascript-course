console.log('-----------4. challenge---------');

var john = {
    fullName: 'John Miller',
    mass: 97,
    height: 1.82,
    calcBMI: function(){
        this.bmi = this.mass /(this.height* this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Smith',
    mass: 97,
    height: 1.82,
    calcBMI: function(){
        this.bmi =  this.mass /(this.height* this.height);
        return this.bmi;
    }
}

var mary = {
    fullName: 'Mary Kevin',
    mass: 64,
    height: 1.63,
    calcBMI: function(){
        this.bmi =   this.mass /(this.height* this.height);
        return this.bmi
    }
}
console.log(john.fullName +'\'s BMI: ' + john.calcBMI().toFixed(2));
console.log(mark.fullName +'\'s BMI: ' + mark.calcBMI().toFixed(2));
console.log(mary.fullName +'\'s BMI: ' + mary.calcBMI().toFixed(2));

function BMImeter(a, b){
    if(a.bmi > b.bmi){
        console.log(a.fullName + '\'s BMI is higher than ' + b.fullName + '\'s')
    } else if(a.bmi < b.bmi){
        console.log(b.fullName + '\'s BMI is higher than ' + a.fullName + '\'s')
    } else{
        console.log(a.fullName + '\s BMI is equal with ' + b.fullName + '\'s');
    }
}

BMImeter(john, mark);
BMImeter(mary, john);
BMImeter(mary, mark);


