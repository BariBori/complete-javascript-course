var bills = [124, 48, 268];
var bills2 = [-1, 0, 124];
console.log('-----------3. challenge---------');

function calculateTips(array){
    var tips = new Array();
    var finals = new Array;

    array.forEach(element => {
        if(element <0){
            tips.push('wrong bill');
            finals.push('wrong bill');
        }       
        else if(element>=0 && element < 50){
            tips.push((element * 0.2).toFixed(2));
            finals.push((element * 1.2).toFixed(2));
        } else if(element >=50 && element <=200){
            tips.push((element*0.15).toFixed(2));
            finals.push((element * 1.15).toFixed(2));
        } else {
            tips.push((element*0.1).toFixed(2));
            finals.push((element*1.1).toFixed(2));
        }
    });
    console.log('Bills: ' + array);
    console.log('Tips: ' + tips);
    console.log('Finals: '+ finals);
    console.log();
}

calculateTips(bills);
calculateTips(bills2);


