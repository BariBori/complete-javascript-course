/*var budgetController = (function(){
    //privates
    var x = 23;

    var add = function(a){
        return x + a;
    }


    //public - access from outside scope
    return {
        publicMethod: function(b){
            return(add(b));
        }
    }

})();

var UIcontroller = (function(){

})();

var controller = (function(budgetCrtl, UICtrl){
    var z = budgetCrtl.publicMethod(7);

    return{
        publicMethod_new: function(){
            console.log(z);
        }
    }
})(budgetController, UIcontroller);*/




//BUDGET CONTROLLER
var budgetController = (function(){
    //private functions
   var Expense = function(id, description, value){
       this.id = id;
       this.description = description;
       this.value = value;
   };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals:{
            exp:0,
            inc:0
        }
    };

    //public functions
    return{
        addItem: function(type, desc, val){
            var newItem, ID;

            //create new ID
            //example: expenses array's last element's ID number + 1
            //expArray[expArray.length-1].id+1

            if(data.allItems[type].length >0){
                ID= data.allItems[type][data.allItems[type].length-1].id + 1;
            } else {
                ID = 0;
            }

            //create new item based on inc and exp types

            if(type === 'exp'){
                newItem = new Expense(ID, desc, val);
            } else if(type === 'inc'){
                newItem = new Income(ID, desc, val);
            }

            //push it into the data structure

            data.allItems[type].push(newItem);
            

            //return the new element
            return newItem;

        },

        testing: function(){
            console.log(data);
        }

    }

})();

//UI CONTROLLER
var UIcontroller = (function(){

    //private object
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }

    //public functions
    return{
        getInput: function(){
            return{
                type: document.querySelector(DOMStrings.inputType).value, //will be inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            }
        },

        getDomStrings: function(){
            return DOMStrings;
        }
    }

})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCrtl, UICtrl){

    //private functions
    var setupEventListeners = function(){
        var DOM = UICtrl.getDomStrings();

        document.querySelector(DOM.inputButton).addEventListener('click', crtlAddItem);

        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
            crtlAddItem();
            }
        });
    };


    var crtlAddItem = function(){

        var input, newItem;
        
        //1. get the field input data
        input = UICtrl.getInput();
        
        //2. add item to the budget controller
        newItem = budgetCrtl.addItem(input.type, input.description, input.value);
        //3. add item to the user interface


        //4. calculate the budget
        //5. display budget in UI
    }

    //public functions
    return{
        init: function(){
            console.log('Application started.');
            setupEventListeners();
        }
    };

    
    
})(budgetController, UIcontroller);

controller.init();