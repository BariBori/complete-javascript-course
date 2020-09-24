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
       this.percentage = -1;
   };

    Expense.prototype.calcPercentage = function(totalIncome){

        if(totalIncome > 0){
            this.percentage = Math.round((this.value /totalIncome)*100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function(){
        return this.percentage;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    //calculate totals and store in the global structure
    var calculateTotal = function(type){
        var sum = 0;
      
        data.allItems[type].forEach(element => {
            sum += element.value;
        });

        data.totals[type] = sum;

    }

    //global data structure
    var data = {
        allItems: {
            exp: [],//objects with ID, description, value
            inc: []
        },
        totals:{
            exp:0,
            inc:0
        },
        budget:0,
        percentage: -1 // does not exist in this point
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

        deleteItem: function(type, id){
            //id = 6;
            //ids = [1,2,4,6,8];
            //index = 3;
            
            var ids, index;

            //make new array only with ID-s
            ids = data.allItems[type].map(function(current){
                return current.id;
            });

            //find the index of the searched ID
            index = ids.indexOf(id);

            //use the index of the IS to delete item from original array
            if(index !==-1){
                data.allItems[type].splice(index, 1);
                
            }

            console.log(ids);
            console.log(index);
            console.log(id);
        },

        calculateBudget: function(){
            
            //caltulate total income and expenses and store in global data structure
            calculateTotal('exp');
            calculateTotal('inc');

            //calculate budget = income-expense   stored in global data structure

            data.budget = data.totals.inc - data.totals.exp;
            
            //calculate the percentage of the income that we spent  stored in global data structure
            if(data.totals.inc>0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) *100);
            } else {
                data.percentage = -1;
            }

        },

        calculatePercentages: function(){
            data.allItems.exp.forEach(function(cur){
                cur.calcPercentage(data.totals.inc); //from Expense prototype
            });
        },

        getPercentages: function(){
            var allPerc = data.allItems.exp.map(function(cur){
                return cur.getPercentage(); //from Expense prototype
            });
            return allPerc;
        },


        getBudget: function(){
            return {
                budget : data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
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
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage'
    }

    //public functions
    return{
        getInput: function(){
            return{
                type: document.querySelector(DOMStrings.inputType).value, //will be inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
        },

        addListItem: function(obj, type){
            var html, newHtml, element;

            if(type === 'inc'){
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%">'+
                    '<div class="item__description">%description%</div>'+
                    '<div class="right clearfix">'+
                        '<div class="item__value">+ %value%</div>'+
                        '<div class="item__delete">'+
                            '<button class="item__delete--btn">'+
                                 '<i class="ion-ios-close-outline"></i>'+
                            '</button>'+
                    '</div></div></div>'
            } else if(type === 'exp'){
                element = DOMStrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%">'+
                '<div class="item__description">%description%</div>'+
                '<div class="right clearfix">'+
                '<div class="item__value">- %value%</div>'+
                '<div class="item__percentage">-</div>'+
                '<div class="item__delete">'+
                '<button class="item__delete--btn">'+
                '<i class="ion-ios-close-outline"></i>'+
                '</button>'+
                '</div></div></div>'

            }

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },

        deleteListItem: function(selectorID){
            //select the element what we want to remove
            var element = document.getElementById(selectorID);
            
            //select the parent of the element than remove the parent's child
            element.parentNode.removeChild(element);
        },

        clearFields: function(){
            var fields, fieldsArray;
            fields = document.querySelectorAll(DOMStrings.inputDescription + ', '+DOMStrings.inputValue);
        
            fieldsArray = Array.prototype.slice.call(fields);
            
            /*fieldsArray.forEach(function(currentValue, indexNumber, array) {
                currentValue.value ="";
            });*/

            fieldsArray.forEach(element => {
                element.value = "";
            });

            fieldsArray[0].focus();
        },

        displayBudget: function(obj){
            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExp;
            if(obj.percentage>0){
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + "%";
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = "---";
            }
            
        },

        displayPercentages: function(percentages){
            var fields = document.querySelectorAll(DOMStrings.expensesPercLabel);

            var nodeListForEach = function(list, callback){
                for ( var i= 0; i<list.length; i++ ){
                    callback(list[i], i);
                }
            };

            nodeListForEach(fields, function(current, index){
                if(percentages[index]>0){
                    current.textContent = percentages[index]+"%";
                } else {
                    current.textContent = '---';
                }

            });

        },

        formatNumber: function(num, type){
            /* 
            + or - before number
            2 decimal points
            comma separated thousands
            
            2013.0467 => +2,013.05
            2000 => + 2,000.00
            */

            var numSplit;

            num = Math.abs(num);
            num = num.toFixed(2);

            numSplit = num.split(".");

            integer = numSplit[0];
            if(int.length>3){
                int = int.substr(0,int.lengt-3) + ',' + int.substr(int.length-3,3);
            }

            decimal = numSplit[1];
            
            return  (type === 'exp' ? sign = '-' : '+') + int + dec;
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

        //set up an event handler on container, the parent element of the delete button
        document.querySelector(DOM.container).addEventListener('click', crtlDeleteItem);
    };

    var updateBudget = function(){
        //1. calculate the budget
       budgetCrtl.calculateBudget();

        //2. return the budget
        var budget = budgetCrtl.getBudget();
        console.log(budget);
        //3. display budget in UI
        UICtrl.displayBudget(budget);
    }

    var updatePercentages = function(){

        //calculate the percentages
        budgetCrtl.calculatePercentages();

        //read from the budget controller
        var percentages = budgetCrtl.getPercentages();
        //update the UI
        UICtrl.displayPercentages(percentages);
    }

    var crtlAddItem = function(){

        var input, newItem;
        
        //1. get the field input data
        input = UICtrl.getInput();

        if(input.description !== "" && !isNaN(input.value) && input.value > 0){
             //2. add item to the budget controller
            newItem = budgetCrtl.addItem(input.type, input.description, input.value);
            
            //3. add item to the user interface
            UICtrl.addListItem(newItem, input.type);
            
            //4. clear the fields
            UICtrl.clearFields();

            //5. calculate and update budget
            updateBudget();

            //6. calculate and update percanteges
            updatePercentages();
        }   
    };

    var crtlDeleteItem = function(event){
        var itemID, splitID, type, ID;

        //find the target element what trigger the event
        itemID = (event.target.parentNode.parentNode.parentNode.parentNode.id);

        //grab the ID
        if(itemID){
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
        }

        //1. delete item from the data structure
        budgetCrtl.deleteItem(type, ID);

        //2. delete from UI
        UICtrl.deleteListItem(itemID);

        //3. update budget
        updateBudget();

        //4. calculate and update percanteges
        updatePercentages();
        
    };

    //public functions
    return{
        init: function(){
            console.log('Application started.');
            UICtrl.displayBudget({
                budget:0,
                totalExp:0,
                totalInc:0,
                percentage:-1
            });
            setupEventListeners();
        }
    };

    
    
})(budgetController, UIcontroller);

controller.init();