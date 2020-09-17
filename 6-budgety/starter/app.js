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
   

})();

//UI CONTROLLER
var UIcontroller = (function(){

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }

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
        //TODO
        //1. get the field input data
        var input = UICtrl.getInput();
        console.log(input);

        //2. add item to the budget controller
        //3. add item to the user interface
        //4. calculate the budget
        //5. display budget in UI
    }

    return{
        init: function(){
            console.log('Application started.');
            setupEventListeners();
        }
    };

    
    
})(budgetController, UIcontroller);

controller.init();