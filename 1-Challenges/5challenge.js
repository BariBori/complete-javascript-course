console.log('-----------5. challenge---------');

var johnBills = [124, 48, 268, 180, 42];
var markBills = [77, 375, 110, 45];
var johnTips = [];
var johnFinals = [];
var markTips = [];
var markFinals = [];

function calcAvgTips(arrayOfTips){
    var avgTip=0;
    arrayOfTips.forEach(element =>{
        avgTip += Number(element);
    });

    return (avgTip/arrayOfTips.length).toFixed(2);
}

function calculateJohnTips(array){
    var tips = new Array();
    var finals = new Array;

    array.forEach(element => {
        if(element <0){
            johnTips.push('wrong bill');
            johnFinals.push('wrong bill');
        }       
        else if(element>=0 && element < 50){
            johnTips.push((element * 0.2).toFixed(2));
            johnFinals.push((element * 1.2).toFixed(2));
        } else if(element >=50 && element <=200){
            johnTips.push((element*0.15).toFixed(2));
            johnFinals.push((element * 1.15).toFixed(2));
        } else {
            johnTips.push((element*0.1).toFixed(2));
            johnFinals.push((element*1.1).toFixed(2));
        }
    });
    console.log('--John\'s stuff--' );
    console.log('Bills: ' + array);
    console.log('Tips: ' + johnTips);
    console.log('Finals: '+ johnFinals);
    console.log('Average tip of John: ' + calcAvgTips(johnTips));
    console.log();
}

calculateJohnTips(johnBills);

function calculateMarkTips(array){
     array.forEach(element => {
        if(element <0){
            markTips.push('wrong bill');
            markFinals.push('wrong bill');
        }       
        else if(element>=0 && element < 10){
            markTips.push((element * 0.2).toFixed(2));
            markFinals.push((element * 1.2).toFixed(2));
        } else if(element >=100 && element <=300){
            markTips.push((element*0.1).toFixed(2));
            markFinals.push((element * 1.1).toFixed(2));
        } else {
            markTips.push((element*0.25).toFixed(2));
            markFinals.push((element*1.25).toFixed(2));
        }
    });
    console.log('--Marks\'s stuff--' );
    console.log('Bills: ' + array);
    console.log('Tips: ' + markTips);
    console.log('Finals: '+ markFinals);
    console.log();

    console.log('Average tip of Mark: ' + calcAvgTips(markTips));
    
}
calculateMarkTips(markBills);

console.log('----Who paid more?----')

if(calcAvgTips(johnTips) > calcAvgTips(markTips)){
    console.log('John paid more tips');
} 
else if(calcAvgTips(johnTips) < calcAvgTips(markTips)){
    console.log('Mark paid more tips');
} 
else {
    console.log('They paid equal');
}
